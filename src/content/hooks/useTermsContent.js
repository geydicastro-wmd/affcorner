import { useEffect } from "react";
import { useContent } from "../context/content-context";
import {
  getHelmetData,
  getPageBlocks,
  getPageContent,
  getTranslation,
  renderHtml,
  stripHtml,
} from "../utils/content";

export default function useTermsContent(type = "Terms and Conditions", options = {}) {
  const { defaultHelmet = {} } = options;
  const {
    getTermsEntry,
    getTermsState,
    ensureTermsLoaded,
  } = useContent();
  const state = getTermsState(type);
  const entry = getTermsEntry(type);
  const translation = getTranslation(entry);
  const blocks = getPageBlocks(entry || {});

  useEffect(() => {
    ensureTermsLoaded(type);
  }, [ensureTermsLoaded, type]);

  return {
    entry,
    page: entry,
    translation,
    blocks,
    content: getPageContent(entry || {}),
    helmet: getHelmetData(entry || {}, defaultHelmet),
    loading: state.loading,
    error: state.error,
    getBlocks: (blockType) =>
      blocks.filter((block) => String(block.type || "").toLowerCase() === String(blockType).toLowerCase()),
    getText: stripHtml,
    renderHtml,
  };
}
