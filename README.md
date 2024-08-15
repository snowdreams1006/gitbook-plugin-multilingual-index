# Welcome to gitbook-plugin-multilingual-index 👋

[![npm:version](https://img.shields.io/npm/v/gitbook-plugin-multilingual-index.svg)](https://www.npmjs.com/package/gitbook-plugin-multilingual-index)
[![npm:download](https://img.shields.io/npm/dt/gitbook-plugin-multilingual-index.svg)](https://www.npmjs.com/package/gitbook-plugin-multilingual-index)
[![npm:prerequisite](https://img.shields.io/badge/gitbook-*-blue.svg)](https://www.npmjs.com/package/gitbook-plugin-multilingual-index)
[![github:documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/snowdreams1006/gitbook-plugin-multilingual-index#readme)
[![github:maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/snowdreams1006/gitbook-plugin-multilingual-index/graphs/commit-activity)
[![npm:license](https://img.shields.io/npm/l/gitbook-plugin-multilingual-index.svg)](https://github.com/snowdreams1006/gitbook-plugin-multilingual-index/blob/master/LICENSE)
[![github:snodreams1006](https://img.shields.io/badge/github-snowdreams1006-brightgreen.svg)](https://github.com/snowdreams1006)
[![微信公众号:雪之梦技术驿站-brightgreen.svg](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg)

> customize multilingual home pages

## Usage

### Step #1 - Update `book.json` file

1. In you gitbook's `book.json` file, add `multilingual-index` to `plugins` list.
2. In `pluginsConfig`, Set `enableSuper` as `false` to disable default home page,and add `index` value to customize multilingual home pages. Only relative paths are supported.

Here is simplest example :

```json
{
    "plugins": ["multilingual-index"],
    "pluginsConfig": {
        "multilingual-index": {
            "enableSuper": false,
            "index":"index.html"
        }
    }
}
```

Please refer to the following configuration item for more details : 

```json
"enableSuper": {
  "type": "boolean",
  "title": "inherit from super",
  "required": false,
  "default": true
},
"index": {
  "type": "string",
  "title": "default index path",
  "required": false
}
```

### Step #2 - gitbook commands

1. Run `gitbook install`. It will automatically install `multilingual-index` gitbook plugin for your book. This is needed only once.

```bash
gitbook install
```

or you can run `npm install gitbook-plugin-multilingual-index` to install locally.

```bash
npm install gitbook-plugin-multilingual-index
```

2. Build your book (`gitbook build`) or serve (`gitbook serve`) as usual.

```bash
gitbook serve
```

## Author

👤 **snowdreams1006**

- Website: [snowdreams1006.tech](https://snowdreams1006.tech/)
- Github: [@snowdreams1006](https://github.com/snowdreams1006)
- Email: [snowdreams1006@163.com](mailto:snowdreams1006@163.com)

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/snowdreams1006/gitbook-plugin-multilingual-index/issues).

![snowdreams1006-wechat-donate.jpg](https://snowdreams1006.github.io/snowdreams1006-wechat-donate.jpg)

## Show your support

Give a **[Star](https://github.com/snowdreams1006/gitbook-plugin-multilingual-index)** if this project helped you!

![snowdreams1006-wechat-donate.jpg](https://snowdreams1006.github.io/snowdreams1006-wechat-donate.jpg)

## Copyright

Copyright © 2019 [snowdreams1006](https://github.com/snowdreams1006).

This project is [MIT](https://github.com/snowdreams1006/gitbook-plugin-multilingual-index/blob/master/LICENSE) licensed.