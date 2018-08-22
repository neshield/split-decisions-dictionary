const fs = require('fs')

// Returns the path to the word list which is separated by `\n`
const wordListPath = require('word-list')

const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n')

const wordMap = new Map()

wordArray.forEach((word) => {
  const wordLength = word.length
  if (!wordMap.has(wordLength)) {
    wordMap.set(wordLength, [])
  }

  wordMap.get(wordLength).push(word)
})

// console.log(JSON.stringify(Array.from(wordMap)))

// fs.writeFileSync('dictionary-by-length.json', JSON.stringify(Array.from(wordMap)))
// fs.writeFileSync('dictionary-by-length-buffer', Buffer.from(JSON.stringify(Array.from(wordMap))), 'ucs2')
// console.log(Buffer.from(JSON.stringify(Array.from(wordMap))))
const dictString = fs.readFileSync('dictionary-by-length.json')

const readMap = new Map(JSON.parse(dictString))
console.log(readMap.get(4))
console.log(readMap)
console.log('done')
// const wordStream = require('word-stream')

// const wordMap = new Map()
// wordStream.on('data', wordBuf => {
//   // console.log(word.toString('ascii'))
//   const word = wordBuf.toString('ascii')
//   const wordLength = word.length
//   if (!wordMap.has(wordLength)) {
//     wordMap.set(wordLength, [])
//   }
//   // console.log(word)
//   console.log(wordLength)
//   wordMap.get(wordLength).push(word)
// })

// wordStream.on('finish', () => {
//   console.log('DONE')
//   console.log(wordMap.get(2812657))
// })
