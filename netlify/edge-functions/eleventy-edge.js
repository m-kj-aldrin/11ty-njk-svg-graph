import { EleventyEdge } from "eleventy:edge";
import precompiledAppData from "./_generated/eleventy-edge-app-data.js";
import stats from "./stats.js";

export default async (request, context) => {
  try {
    let edge = new EleventyEdge("edge", {
      request,
      context,
      precompiled: precompiledAppData,

      // default is [], add more keys to opt-in e.g. ["appearance", "username"]
      cookies: [],
    });

    const url = new URL(request.url);
    const sortType = url.searchParams.get("sort-type");

    console.log(sortType)
    edge.config(eleventyConfig => {
      eleventyConfig.addGlobalData("sortType", sortType);
      eleventyConfig.addGlobalData("stats", () => stats({ sortType }));
    });

    return await edge.handleResponse();
  } catch (e) {
    console.log("ERROR", { e });
    return context.next(e);
  }
};
