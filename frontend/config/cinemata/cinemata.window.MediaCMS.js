const MediaCMS = {
    api: require("../core/api.config.js"),
    url: require("../core/url.config.js"),
    user: require("../core/user.config.js"),
    site: require("./installation/site.config.js"),
    pages: require("./installation/pages.config.js"),
    contents: require("./installation/contents.config.js"),
    features: require("./installation/features.config.js"),
};

// Adding API endpoints for topics, languages, and countries
MediaCMS.api.topics = "/api/v1/topics";
MediaCMS.api.languages = "/api/v1/languages";  // API route for languages
MediaCMS.api.countries = "/api/v1/countries";

MediaCMS.url.topics = "./topics.html";
MediaCMS.url.languages = "./languages.html";  // URL for the languages page
MediaCMS.url.countries = "./countries.html";

module.exports = {
    MediaCMS: {
        api: require("../core/api.config.js"),
        url: require("../core/url.config.js"),
        user: require("../core/user.config.js"),
        site: require("./installation/site.config.js"),
        pages: require("./installation/pages.config.js"),
        contents: require("./installation/contents.config.js"),
        features: require("./installation/features.config.js"),
    },
};
