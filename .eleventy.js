const tinyCss = require("@greyskullrocks/eleventy-plugin-tinycss");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPlugin(tinyCss);

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}