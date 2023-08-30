const packageJson = require("../../package.json");

module.exports = {
  title: "Blognik",
  description: "Agregator ciekawych polskojęzycznych blogów",
  url: "https://blognik.pl",
  github: {
    project: "https://github.com/lwojcik/blognik.pl",
    issue: "https://github.com/lwojcik/blognik.pl/issues/new",
  },
  userAgent: "Blognik.pl",
  addRefToExternalLinks: false,
  ref: "blognik.pl",
  language: "pl",
  startYear: 2023,
  version: 3,
  generator: {
    name: "Eleventy",
    version: packageJson.dependencies["@11ty/eleventy"].replace("^", ""),
  },
  author: {
    name: "Łukasz Wójcik",
    homepage: "https://lukaszwojcik.net/",
    contact: "https://lukaszwojcik.net/contact/",
    blog: "https://offbeatbits.com/",
    linkedin: "https://www.linkedin.com/in/lukaszwojcik/",
  },
  dateFormats: {
    readable: "dd.MM.yyyy",
  },
  maxPostLength: 400,
  maxItemsPerFeed: 10,
  localCacheDuration: "6h",
};
