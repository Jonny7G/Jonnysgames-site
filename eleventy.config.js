module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/css");
  eleventyConfig.addPassthroughCopy("content/img");
  eleventyConfig.addPassthroughCopy("content/fonts");
};

module.exports.config = {
  dir: {
    input: "content",
    includes: "../_includes"
  }
};