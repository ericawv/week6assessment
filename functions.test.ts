const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('returns and array', () => {
        expect(shuffleArray([])).toEqual(([]))
    })
    test('return an array of the same length as the arguments sent in', () => {
        let result = shuffleArray([1])
        expect(result).toHaveLength(1)

    })

   

    
})