const assert = require('chai').assert
const wordsByLength = require('./words-by-length')

describe('Get Words Of Length', function () {
  // Test these two lengths because the arrays are shorter,
  // making it easier to write the test
  it('should return the correct array for length 25', function () {
    return wordsByLength.getWordsOfLength(25).then((words) => {
      assert.sameOrderedMembers(words,
         [ 'immunoelectrophoretically', 'phosphatidylethanolamines' ])
    })
  })

  it('should return the correct array for length 24', function () {
    return wordsByLength.getWordsOfLength(24).then((words) => {
      assert.sameOrderedMembers(words,
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
})
