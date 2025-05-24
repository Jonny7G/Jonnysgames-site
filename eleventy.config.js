module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("css/**/*.css");
  eleventyConfig.addPassthroughCopy("/css");
};
