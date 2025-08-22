const MediaCMS = {
	api: require("../core/api.config.js"),
	url: require("../core/url.config.js"),
	user: require("../core/user.config.js"),
	site: require("./installation/site.config.js"),
	pages: require("./installation/pages.config.js"),
	contents: require("./installation/contents.config.js"),
	features: require("./installation/features.config.js"),
};

MediaCMS.api.topics = "/api/v1/topics";
MediaCMS.api.languages = "/api/v1/languages";
MediaCMS.api.countries = "/api/v1/countries";

MediaCMS.url.topics = "./topics.html";
MediaCMS.url.languages = "./languages.html";
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
