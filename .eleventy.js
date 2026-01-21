const MagneticButton = require('./src/_includes/components/MagneticButton');
const SelectedWorkBlock = require('./src/_includes/components/SelectedWorkBlock');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("src/js/");
    
    eleventyConfig.addWatchTarget("src/css/");

    
    eleventyConfig.addShortcode("MagneticButton", MagneticButton);
    eleventyConfig.addShortcode("SelectedWorkBlock", SelectedWorkBlock);

    eleventyConfig.addCollection("projects", collection =>
        collection.getFilteredByGlob("src/projects/**/index.html")
    );


    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },

        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
};
