import { tennisTalk } from './tennisTalk'

describe('tennis talk', () => {
  test('return score in tennis talk', () => {
    expect(tennisTalk('2-1')).toStrictEqual('30-15')
    expect(tennisTalk('1-1')).toStrictEqual('15-all')
    expect(tennisTalk('0-2')).toStrictEqual('love-30')
    expect(tennisTalk('3-0')).toStrictEqual('40-love')
    expect(tennisTalk('0-0')).toStrictEqual('love-all')
  })
})
