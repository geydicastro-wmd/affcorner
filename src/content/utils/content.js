import api from "../../api/axios";

export const CMS_BRAND_ID = 23;
export const CMS_BRAND_NAME = "AffCorner";
export const CMS_LANGUAGE = "en";

export const CMS_PAGE_TYPES = [
  "home",
  "Content",
  "AboutUs",
  "BasicPage",
  "Affiliates Brands",
  "Commissions",
  "ContactUs",
  "FrequentlyAskedQuestions",
  "Register",
  "Login",
  "Footer",
  "Header",
];

const requestCache = new Map();

export function stripHtml(value = "") {
  return String(value).replace(/<[^>]*>/g, "").trim();
}

export function renderHtml(html) {
  return { __html: html || "" };
}

export function getTranslation(page, lang = CMS_LANGUAGE) {
  return (
    page?.translation ||
    page?.translations?.find((item) => item?.language === lang) ||
    page?.translations?.[0] ||
    {}
  );
}

export function unwrapList(responseData) {
  const items =
    responseData?.items ||
    responseData?.data?.items ||
    responseData?.data?.results ||
    responseData?.results ||
    responseData?.data ||
    responseData ||
    [];

  return Array.isArray(items) ? items : [items].filter(Boolean);
}

export function unwrapPage(responseData, lang = CMS_LANGUAGE) {
  const pages = unwrapPages(responseData, lang);

  if (pages.length) {
    return pages.find((page) => page?.status === "draft") || pages[0];
  }

  const page =
    responseData?.data?.attributes ||
    responseData?.data?.page ||
    responseData?.page ||
    responseData?.data ||
    responseData ||
    null;

  if (!page) return null;

  return {
    ...page,
    translation: getTranslation(page, lang),
  };
}

export function unwrapPages(responseData, lang = CMS_LANGUAGE) {
  const items =
    responseData?.items ||
    responseData?.data?.items ||
    responseData?.results ||
    responseData?.data?.results ||
    [];

  if (!Array.isArray(items)) return [];

  return items.map((page) => ({
    ...page,
    translation: getTranslation(page, lang),
  }));
}

function getContentBlocks(value) {
  if (Array.isArray(value)) {
    return value.filter((block) => block?.content || block?.src);
  }

  if (value) {
    return [{ content: value, type: "html" }];
  }

  return [];
}

export function getPageBlocks(page, lang = CMS_LANGUAGE) {
  const translation = getTranslation(page, lang);
  const sources = [
    translation?.description,
    translation?.content,
    page?.description,
    page?.content,
    page?.body,
    page?.html,
    page?.descriptionHtml,
    page?.text,
  ];

  for (const source of sources) {
    const blocks = getContentBlocks(source);
    if (blocks.length) return blocks;
  }

  return [];
}

export function getPageContent(page, lang = CMS_LANGUAGE) {
  const blocks = getPageBlocks(page, lang);

  if (blocks.length) {
    return blocks.map((block) => block.content).join("\n");
  }

  return page?.terms || "";
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

export function getHelmetData(page, defaultHelmet = {}, lang = CMS_LANGUAGE) {
  const translation = getTranslation(page, lang);
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
    title: source.meta_title || source.title || source.metaTitle || defaultHelmet.title || CMS_BRAND_NAME,
    description:
      source.meta_description ||
      source.description ||
      source.metaDescription ||
      defaultHelmet.description ||
      "",
    keywords: source.focus_keyphrase || source.keywords || source.metaKeywords || "",
    ogTitle:
      source.og_title ||
      source.ogTitle ||
      source.openGraphTitle ||
      source.title ||
      defaultHelmet.ogTitle ||
      defaultHelmet.title ||
      CMS_BRAND_NAME,
    ogDescription:
      source.og_description ||
      source.ogDescription ||
      source.openGraphDescription ||
      source.meta_description ||
      source.description ||
      defaultHelmet.ogDescription ||
      defaultHelmet.description ||
      "",
    ogImage: normalizeImage(
      source.og_image || source.ogImage || source.openGraphImage || source.image,
    ),
    ogType: source.ogType || defaultHelmet.ogType || "website",
    canonical: source.canonical_url || source.canonical || source.canonicalUrl || "",
    robots: source.robots || "",
    twitterTitle: source.twitter_title || "",
    twitterDescription: source.twitter_description || "",
    twitterImage: normalizeImage(source.twitter_image || ""),
  };
}

export async function getCachedRequest(cacheKey, request) {
  if (!requestCache.has(cacheKey)) {
    requestCache.set(cacheKey, request().catch((error) => {
      requestCache.delete(cacheKey);
      throw error;
    }));
  }

  return requestCache.get(cacheKey);
}

export async function fetchCmsPage(pageType) {
  const pages = await fetchCmsPages(pageType);
  return pages.find((page) => page?.status === "draft") || pages[0] || null;
}

export async function fetchCmsPages(pageType) {
  const cacheKey = `page:${pageType}`;
  const response = await getCachedRequest(cacheKey, () =>
    api.get("/content-page/admin", {
      params: {
        brand_id: CMS_BRAND_ID,
        page_type: pageType,
        language: CMS_LANGUAGE,
      },
    }),
  );

  const pages = unwrapPages(response.data);

  if (pages.length) return pages;

  return [unwrapPage(response.data)].filter(Boolean);
}

export async function fetchSliders() {
  const response = await getCachedRequest("sliders", () =>
    api.get("/sliders", {
      params: {
        brand: CMS_BRAND_NAME,
        language: CMS_LANGUAGE,
        order_by: "position",
      },
    }),
  );

  return unwrapList(response.data);
}

export async function fetchPromotions() {
  const response = await getCachedRequest("promotions", () =>
    api.get("/promotion", {
      params: {
        brand: CMS_BRAND_NAME,
        language: CMS_LANGUAGE,
      },
    }),
  );

  return unwrapList(response.data);
}

export async function fetchGameOfWeek() {
  const response = await getCachedRequest("game-of-week", () =>
    api.get("/game-of-the-week/", {
      params: {
        brand: CMS_BRAND_NAME,
        language: CMS_LANGUAGE,
      },
    }),
  );

  const items = unwrapList(response.data);
  return items[0] || null;
}

export async function fetchTerms(type) {
  const response = await getCachedRequest(`terms:${type}`, () =>
    api.get("/terms-conditions/", {
      params: {
        brand: CMS_BRAND_NAME,
        type,
        language: CMS_LANGUAGE,
      },
    }),
  );

  return unwrapPage(response.data);
}
