import { tennisGamePoints } from './tennisPoints'

describe('tennis tests', () => {
  test('count scores', () => {
    expect(tennisGamePoints('15-40')).toStrictEqual(4)
    expect(tennisGamePoints('30-all')).toStrictEqual(4)
    expect(tennisGamePoints('love-15')).toStrictEqual(1)
    expect(tennisGamePoints('15-love')).toStrictEqual(1)
    expect(tennisGamePoints('love-all')).toStrictEqual(0)
  })
})