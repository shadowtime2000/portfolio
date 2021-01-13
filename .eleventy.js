const tinyCss = require("@greyskullrocks/eleventy-plugin-tinycss");

const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPlugin(tinyCss);

    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
        } else {
            return content;
        }
    });

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}