import { EleventyEdge } from "eleventy:edge";
import precompiledAppData from "./_generated/eleventy-edge-app-data.js";
import stats from "./stats.js";
import hexToHSL from "./hex2hsl.js";

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
    let baseColorHEX = url.searchParams.get("base-color") || "#ff5555";
    let baseColorHSL = hexToHSL(baseColorHEX);


    edge.config(eleventyConfig => {
      eleventyConfig.addGlobalData("baseColorHEX", baseColorHEX);
      eleventyConfig.addGlobalData("baseColorHSL", baseColorHSL);
      eleventyConfig.addGlobalData("sortType", sortType);
      eleventyConfig.addGlobalData("stats", () => stats({ sortType }));
    });

    return await edge.handleResponse();
  } catch (e) {
    console.log("ERROR", { e });
    return context.next(e);
  }
};
