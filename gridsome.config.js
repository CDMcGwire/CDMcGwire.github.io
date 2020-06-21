module.exports = {
  siteName: "CDMcGwire",
  siteUrl: "https://cdmcgwire.com",
  plugins: [
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Markdown",
        baseDir: "./content/",
        template: "./src/templates/Post.vue",
        plugins: [
          [
            "remark-autolink-headings",
            {
              content: {
                type: "element",
                tagName: "span",
                properties: { className: ["icon", "icon-link"] },
                children: [{ type: "text", value: "🠶" }]
              }
            }
          ],
          [ "remark-bracketed-spans" ]
        ]
      }
    }
  ]
};
