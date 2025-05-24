module.exports = function (eleventyConfig) {
  //eleventyConfig.addWatchTarget("css/**/*.css");
  eleventyConfig.addPassthroughCopy("content/css");
  eleventyConfig.addPassthroughCopy("content/img");
};

module.exports.config = {
  dir: {
    input: "content",
    includes: "../_includes"
  }
};