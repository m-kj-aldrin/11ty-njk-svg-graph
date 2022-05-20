const { EleventyEdgePlugin } = require("@11ty/eleventy");
/** @param {import("@11ty/eleventy/src/UserConfig")} config */
module.exports = config => {
  config.addPassthroughCopy("./src/css");

  config.addPlugin(EleventyEdgePlugin)

  return {
    dir: {
      input: "src",
    },
  };
};
