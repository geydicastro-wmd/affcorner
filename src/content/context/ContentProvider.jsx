import { useCallback, useEffect, useMemo, useState } from "react";
import { ContentContext } from "./content-context";
import {
  CMS_LANGUAGE,
  CMS_PAGE_TYPES,
  fetchCmsPages,
  fetchGameOfWeek,
  fetchPromotions,
  fetchSliders,
  fetchTerms,
  getTranslation,
} from "../utils/content";

const lang = "en";

function createTermsState(entry = null, loading = false, error = null) {
  return { entry, loading, error };
}

function getEntriesByPageType(entriesByType, pageType) {
  const expectedType = String(pageType || "").trim().toLowerCase();
  const matchingType = Object.keys(entriesByType).find(
    (type) => String(type).trim().toLowerCase() === expectedType,
  );

  return matchingType ? entriesByType[matchingType] : null;
}

export default function ContentProvider({ children }) {
  const [pagesByType, setPagesByType] = useState({});
  const [pageEntriesByType, setPageEntriesByType] = useState({});
  const [sliders, setSliders] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [gameOfWeek, setGameOfWeek] = useState(null);
  const [termsByType, setTermsByType] = useState({});
  const [isBootstrapping, setIsBootstrapping] = useState(true);
  const [bootstrapError, setBootstrapError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function bootstrapContent() {
      setIsBootstrapping(true);
      setBootstrapError(null);

      const pageRequests = CMS_PAGE_TYPES.map(async (pageType) => {
        const entries = await fetchCmsPages(pageType);
        return [pageType, entries];
      });

      const results = await Promise.allSettled([
        Promise.allSettled(pageRequests),
        fetchSliders(),
        fetchPromotions(),
        fetchGameOfWeek(),
      ]);

      if (!isMounted) return;

      const [pagesResult, slidersResult, promotionsResult, gameResult] = results;
      const nextPagesByType = {};
      const nextPageEntriesByType = {};

      if (pagesResult.status === "fulfilled") {
        pagesResult.value.forEach((pageResult) => {
          if (pageResult.status === "fulfilled") {
            const [pageType, entries] = pageResult.value;
            const page = entries.find((entry) => entry?.status === "draft") || entries[0];

            if (entries.length) nextPageEntriesByType[pageType] = entries;
            if (page) nextPagesByType[pageType] = page;
          }
        });
      }

      setPagesByType(nextPagesByType);
      setPageEntriesByType(nextPageEntriesByType);
      setSliders(slidersResult.status === "fulfilled" ? slidersResult.value : []);
      setPromotions(promotionsResult.status === "fulfilled" ? promotionsResult.value : []);
      setGameOfWeek(gameResult.status === "fulfilled" ? gameResult.value : null);

      const rejected = results.find((result) => result.status === "rejected");
      setBootstrapError(rejected?.reason || null);
      setIsBootstrapping(false);
    }

    bootstrapContent();

    return () => {
      isMounted = false;
    };
  }, []);

  const getPage = useCallback(
    (pageType) => getEntriesByPageType(pagesByType, pageType) || null,
    [pagesByType],
  );

  const getPageTranslation = useCallback(
    (pageType) => getTranslation(getPage(pageType), CMS_LANGUAGE),
    [getPage],
  );

  const getPageByTitle = useCallback((pageType, title) => {
    const normalizeTitle = (value) =>
      String(value || "").trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    const expectedTitle = normalizeTitle(title);

    if (!expectedTitle) return getPage(pageType);

    const entries = getEntriesByPageType(pageEntriesByType, pageType) || [];
    const matches = entries.filter((entry) => {
      const translation = getTranslation(entry, CMS_LANGUAGE);
      const titles = [translation?.title, entry?.title, entry?.name];

      return titles.some(
        (value) => normalizeTitle(value) === expectedTitle,
      );
    });

    return matches.find((entry) => entry?.status === "draft") || matches[0] || null;
  }, [getPage, pageEntriesByType]);

  const getPromotionBySlug = useCallback(
    (slug) =>
      promotions.find((promotion) =>
        [promotion?.slug, promotion?.url_slug, promotion?.urlSlug].includes(slug),
      ) || null,
    [promotions],
  );

  const getTermsEntry = useCallback(
    (type) => termsByType[type]?.entry || null,
    [termsByType],
  );

  const getTermsState = useCallback(
    (type) => termsByType[type] || createTermsState(),
    [termsByType],
  );

  const ensureTermsLoaded = useCallback(async (type) => {
    if (!type) return null;

    const currentState = termsByType[type];
    if (currentState?.entry) return currentState.entry;
    if (currentState?.loading) return null;

    setTermsByType((current) => ({
      ...current,
      [type]: createTermsState(current[type]?.entry || null, true, null),
    }));

    try {
      const entry = await fetchTerms(type);

      setTermsByType((current) => ({
        ...current,
        [type]: createTermsState(entry, false, null),
      }));

      return entry;
    } catch (error) {
      setTermsByType((current) => ({
        ...current,
        [type]: createTermsState(null, false, error),
      }));

      return null;
    }
  }, [termsByType]);

  const value = useMemo(() => {
    const pages = Object.values(pagesByType);

    return {
      lang,
      pages,
      pagesByType,
      pageEntriesByType,
      sliders,
      promotions,
      gameOfWeek,
      isBootstrapping,
      bootstrapError,
      getPage,
      getPageTranslation,
      getPageByTitle,
      getPromotionBySlug,
      getTermsEntry,
      getTermsState,
      ensureTermsLoaded,
    };
  }, [
    bootstrapError,
    ensureTermsLoaded,
    gameOfWeek,
    getPage,
    getPageTranslation,
    getPageByTitle,
    getPromotionBySlug,
    getTermsEntry,
    getTermsState,
    isBootstrapping,
    pagesByType,
    pageEntriesByType,
    promotions,
    sliders,
  ]);

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
}
