var copyrightConfig = {};

module.exports = {
    book: {
        assets: "./assets",
        js: [
            "copyright.js"
        ]
    },
    hooks: {
        "init": function() {
            this.log.debug.ln('init', this.options.pluginsConfig.copyright);

            copyrightConfig = this.options.pluginsConfig.copyright;
        },
        "page:before": function(page) {
            this.log.debug.ln('page:before', JSON.stringify(page.content));

            if (copyrightConfig) {
                var site = copyrightConfig.site;
                if (site.slice(-1) != "/") {
                    site += '/';
                }
                var author = copyrightConfig.author;
                var website = copyrightConfig.website;
                var image = copyrightConfig.image;
                var lang = '';
                if (this.isLanguageBook()) {
                    lang = this.options.language;
                    if (typeof author === 'object') author = author[lang];
                    if (typeof website === 'object') website = website[lang];
                    if (typeof image === 'object') image = image[lang];
                    if (lang) {
                        lang += '/';
                    }
                }
                var url = page.path;
                var readmeReg = /\/?\bREADME\.md$/;
                if (readmeReg.test(url)) {
                    url = site + lang + (url === 'README.md' ? '' : url.replace(readmeReg, '/'));
                } else {
                    url = site + lang + url.replace(/.md$/, '.html');
                }
                var copyright = '\n\n```html\nAuthor: ' + author + '\nUrl: ' + url + '\nSource: ' + website + '\nThis article was originally published in「' + website + '」,Reproduced please indicate the source, thank you for cooperation!\n```\n';
                if (/^zh.*/.test(this.options.language)) {
                    copyright = '\n\n```html\n作者: ' + author + '\n链接: ' + url + '\n来源: ' + website + '\n本文原创发布于「' + website + '」,转载请注明出处,谢谢合作!\n```\n';
                }
                if (image) {
                    copyright += `\n![${image}](${image})`;
                }

                page.content = page.content + copyright;
            }

            return page;
        }
    }
};