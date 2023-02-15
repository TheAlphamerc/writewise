import "server-only";
import { cache } from "react";
import { NotionAPI } from "notion-client";

const notion = new NotionAPI();

export const preloadNotionPage = (id: string) => {
  void getNotionPage(id);
};

export const getNotionPage = cache(async (page: string) => {
  const recordMap = await notion
    .getCollectionData(page, "", "")
    .catch((err) => {});
  // Recommendation: handle errors
  if (!recordMap) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");

    return undefined;
  }

  return recordMap;
});
