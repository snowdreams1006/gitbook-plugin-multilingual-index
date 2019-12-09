var fs = require('fs');
var path = require('path');

module.exports = {
    hooks: {
        "finish": function() {
            this.log.debug.ln('finish', this.options.pluginsConfig['multilingual-index']);

            var indexPath = this.options.pluginsConfig['multilingual-index'].index;
            if (indexPath) {
                var indexAbsolutePath = path.join(process.cwd(), indexPath);
                var indexPluginPath = path.join(process.cwd(), 'node_modules', 'gitbook-plugin-multilingual-index', '_layouts', 'website', 'index_generated.html');
                if (fs.existsSync(indexAbsolutePath)) {
                    fs.createReadStream(indexAbsolutePath).pipe(fs.createWriteStream(indexPluginPath));
                }
            }
        }
    }
};