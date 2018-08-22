const assert = require('assert')
const wordsOfLength = require('./index.js')

describe('Get Words Of Length', function () {
  // TODO: Test alphabetical order and total word count

  // Test these two lengths because the arrays are shorter,
  // making it easier to write the test
  it('should return the correct array for length 24', function () {
    return wordsOfLength(24).then((words) => {
      assertArrayEquals(words,
        [ 'dichlorodifluoromethanes',
          'electrocardiographically',
          'electroencephalographers',
          'electroencephalographies',
          'intercomprehensibilities',
          'microelectrophoretically',
          'microspectrophotometries',
          'overintellectualizations',
          'phosphatidylethanolamine' ])
    })
  })

  it('should return the correct array for length 25', function () {
    return wordsOfLength(25).then((words) => {
      assertArrayEquals(words,
         [ 'immunoelectrophoretically', 'phosphatidylethanolamines' ])
    })
  })
})

function assertArrayEquals (actual, expected) {
  if (actual.length !== expected.length) {
    assert.fail('actual and expected had different lengths')
  }

  actual.forEach((val, i) => {
    if (val !== expected[i]) {
      assert.fail(`values at index ${i} did not match`)
    }
  })
}
