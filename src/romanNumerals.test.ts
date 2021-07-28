import { RomanNumerals } from './romanNumerals'
describe('roman numerals helper', () => {

  function runToRoman(input: number, result: string) {
    expect(RomanNumerals.toRoman(input)).toStrictEqual(result)
  }

  function runFromRoman(input: string, result: number) {
    expect(RomanNumerals.fromRoman(input)).toStrictEqual(result)

  }

  test('test', () => {
    runToRoman(1000, 'M')
    runToRoman(4, 'IV')
    runToRoman(9, 'IX')
    runToRoman(1991, 'MCMXCI')
  })

  test('test', () => {
    runFromRoman('M', 1000)
    runFromRoman('MCMXCI', 1991)
    runFromRoman('IX', 9)
    runFromRoman('IV', 4)
  })
})
