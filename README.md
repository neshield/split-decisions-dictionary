# words-of-length

Returns an array of all English words of the specified length.

The list of words was pulled from [`word-list`](https://github.com/sindresorhus/word-list).

## Install

```
$ npm install --save word-stream
```

## Usage

```js
const wordsOfLength = require('words-of-length');

wordsOfLength(24).then((words) => {
    //[ 'dichlorodifluoromethanes',
    //  'electrocardiographically',
    //  'electroencephalographers',
    //  'electroencephalographies',
    //  'intercomprehensibilities',
    //  'microelectrophoretically',
    //  'microspectrophotometries',
    //  'overintellectualizations',
    //  'phosphatidylethanolamine' ]
})
```

## License

MIT