import { useEffect, useMemo, useState } from "react";
import api from "../api/axios";

const BRAND_ID = 23;
const BRAND_NAME = "AffCorner";
const DEFAULT_LANGUAGE = "en";

const fallbackHelmet = {
  title: "AffCorner",
  description: "",
  ogTitle: "AffCorner",
  ogDescription: "",
  ogType: "website",
};

const pageEndpoints = {
  home: [
    `/content-page/admin?brand_id=${BRAND_ID}&page_type=home&language=${DEFAULT_LANGUAGE}`,
  ],
  "terms-and-conditions": [
    `/terms-conditions/?brand=${BRAND_NAME}&type=Terms+and+Conditions&language=${DEFAULT_LANGUAGE}`,
  ],
};

function unwrapPageData(responseData) {
  const page =
    responseData?.items?.[0] ||
    responseData?.data?.items?.[0] ||
    responseData?.data?.attributes ||
    responseData?.data?.page ||
    responseData?.data ||
    responseData?.page ||
    responseData ||
    {};

  const translation =
    page?.translations?.find(({ language }) => language === DEFAULT_LANGUAGE) ||
    page?.translations?.[0] ||
    {};

  return {
    ...page,
    translation,
  };
}

function getContentHtml(value) {
  if (Array.isArray(value)) {
    return value
      .map((block) => block?.content || "")
      .filter(Boolean)
      .join("\n");
  }

  return value || "";
}

function getContentBlocks(value) {
  if (Array.isArray(value)) {
    return value.filter((block) => block?.content);
  }

  if (value) {
    return [{ content: value, type: "html" }];
  }

  return [];
}

function getTranslationSource(page) {
  return (
    page?.translation ||
    page?.translations?.find(({ language }) => language === DEFAULT_LANGUAGE) ||
    page?.translations?.[0] ||
    {}
  );
}

function normalizeImage(image) {
  return (
    image?.url ||
    image?.data?.attributes?.url ||
    image?.data?.url ||
    image ||
    ""
  );
}

function normalizeHelmetData(page, defaultHelmet) {
  const translation = getTranslationSource(page);
  const source =
    translation?.seo ||
    translation?.helmet ||
    translation?.meta ||
    page?.seo ||
    page?.helmet ||
    page?.meta ||
    page?.metadata ||
    translation ||
    page ||
    {};

  return {
    title:
      source.meta_title ||
      source.title ||
      source.metaTitle ||
      defaultHelmet.title,
    description:
      source.meta_description ||
      source.description ||
      source.metaDescription ||
      defaultHelmet.description,
    keywords: source.focus_keyphrase || source.keywords || source.metaKeywords || "",
    ogTitle:
      source.og_title ||
      source.ogTitle ||
      source.openGraphTitle ||
      source.title ||
      defaultHelmet.ogTitle,
    ogDescription:
      source.og_description ||
      source.ogDescription ||
      source.openGraphDescription ||
      source.meta_description ||
      source.description ||
      defaultHelmet.ogDescription,
    ogImage: normalizeImage(
      source.og_image || source.ogImage || source.openGraphImage || source.image,
    ),
    ogType: source.ogType || defaultHelmet.ogType,
    canonical: source.canonical_url || source.canonical || source.canonicalUrl || "",
    robots: source.robots || "",
    twitterTitle: source.twitter_title || "",
    twitterDescription: source.twitter_description || "",
    twitterImage: normalizeImage(source.twitter_image || ""),
  };
}

function normalizeContent(page) {
  const translation = getTranslationSource(page);

  return (
    getContentHtml(translation.description) ||
    getContentHtml(translation.content) ||
    getContentHtml(page.description) ||
    getContentHtml(page.content) ||
    page.body ||
    page.html ||
    page.descriptionHtml ||
    page.terms ||
    page.text ||
    ""
  );
}

function normalizeBlocks(page) {
  const translation = getTranslationSource(page);

  return (
    getContentBlocks(translation.description).length
      ? getContentBlocks(translation.description)
      : getContentBlocks(translation.content).length
        ? getContentBlocks(translation.content)
        : getContentBlocks(page.description).length
          ? getContentBlocks(page.description)
          : getContentBlocks(page.content)
  );
}

function stripHtml(value = "") {
  return value.replace(/<[^>]*>/g, "").trim();
}

async function fetchFirstAvailable(endpoints) {
  let lastError;

  for (const endpoint of endpoints) {
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}

export default function useCmsPage(pageType, options = {}) {
  const {
    endpoints = pageEndpoints[pageType] || [
      `/content-page/admin?brand_id=${BRAND_ID}&page_type=${pageType}&language=${DEFAULT_LANGUAGE}`,
    ],
    defaultHelmet = fallbackHelmet,
  } = options;

  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const endpointKey = endpoints.join("|");

  useEffect(() => {
    let isMounted = true;

    async function loadPage() {
      setLoading(true);
      setError(null);

      try {
        const responseData = await fetchFirstAvailable(endpoints);
        const nextPage = unwrapPageData(responseData);

        if (isMounted) {
          setPage(nextPage);
        }
      } catch (requestError) {
        if (isMounted) {
          setError(requestError);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadPage();

    return () => {
      isMounted = false;
    };
  }, [endpointKey]);

  const helmet = useMemo(
    () => normalizeHelmetData(page, defaultHelmet),
    [defaultHelmet, page],
  );

  const content = useMemo(() => normalizeContent(page || {}), [page]);
  const blocks = useMemo(() => normalizeBlocks(page || {}), [page]);

  return {
    page,
    helmet,
    content,
    blocks,
    loading,
    error,
    getBlocks: (type) => blocks.filter((block) => block.type === type),
    getText: stripHtml,
    renderHtml: (html) => ({ __html: html || "" }),
  };
}
