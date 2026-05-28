import { useMemo } from "react";
import { useContent } from "../context/content-context";
import {
  getHelmetData,
  getPageBlocks,
  getPageContent,
  getTranslation,
  renderHtml,
  stripHtml,
} from "../utils/content";

const fallbackHelmet = {
  title: "AffCorner",
  description: "",
  ogTitle: "AffCorner",
  ogDescription: "",
  ogType: "website",
};

export default function useCmsPage(pageType, options = {}) {
  const {
    defaultHelmet = fallbackHelmet,
    title,
  } = options;
  const {
    getPage,
    getPageByTitle,
    isBootstrapping,
    bootstrapError,
    sliders,
  } = useContent();

  const page = title ? getPageByTitle(pageType, title) : getPage(pageType);
  const translation = useMemo(() => getTranslation(page), [page]);
  const blocks = useMemo(() => getPageBlocks(page || {}), [page]);
  const content = useMemo(() => getPageContent(page || {}), [page]);
  const helmet = useMemo(
    () => getHelmetData(page || {}, defaultHelmet),
    [defaultHelmet, page],
  );

  const getBlocks = (type) =>
    blocks.filter((block) => String(block.type || "").toLowerCase() === String(type).toLowerCase());

  return {
    page,
    translation,
    blocks,
    loading: isBootstrapping,
    error: bootstrapError,
    getBlocks,
    getText: stripHtml,
    renderHtml,
    content,
    helmet,
    sliders,
    slidersLoading: isBootstrapping,
  };
}
