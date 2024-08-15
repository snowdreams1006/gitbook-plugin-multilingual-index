var fs = require('fs');
var path = require('path');

module.exports = {
    hooks: {
        "finish": function() {
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