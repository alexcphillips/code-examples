import { squareSum } from './squareSum'

describe('test', () => {
  test('test', () => {
    expect(squareSum([0, 3, 4, 5])).toEqual(50)
  })
  test('test', () => {
    expect(squareSum([0,0,0])).toEqual(0)
  })
})
