import { countByX } from './countByX'

describe('Counting by x', () => {
  test('10 multiples of 1', () => {
    expect(countByX(1,10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  test('5 multiples of 2', () => {
    expect(countByX(5,4)).toStrictEqual([5, 10, 15, 20])
  })
  test('5 multiples of 50', () => {
    expect(countByX(50, 5)).toStrictEqual([50 ,100 ,150 ,200 ,250])
  })
  test('100 multiples of 0', () => {
    expect(countByX(0, 5)).toStrictEqual([0, 0, 0, 0, 0])
  })
  test('10 multiples of 1000', () => {
    expect(countByX(1000, 10)).toStrictEqual([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000])
  })
})
