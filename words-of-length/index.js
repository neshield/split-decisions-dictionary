const fse = require('fs-extra')

let wordsMap = null

function loadWordsMap () {
  if (wordsMap === null) {
    return fse.readFile('resources/dictionary-by-length.json').then((dictString) => {
      wordsMap = new Map(JSON.parse(dictString))
      return wordsMap
    })
  } else {
    return Promise.resolve(wordsMap)
  }
}

const wordsOfLength = function (wordLength) {
  return loadWordsMap().then((wordsMap) => {
    return wordsMap.get(wordLength)
  })
}

module.exports = wordsOfLength
