import { factorial } from './factorial'

describe('factorial testing', () => {
  test('factorial of 3',() => {
    expect(factorial(3)).toStrictEqual('factorial for 3 is 6')
  })
  test('factorial of 0', () => {
    expect(factorial(0)).toStrictEqual('factorial for 0 is 1')
  })
  test('factorial of 999', () => {
    let err;
    try {
      factorial(999)
    } catch(e) {
      err = e
    }
      expect(err).toBeInstanceOf(RangeError)
  })
  test('factorial of -1', () => {
    let err;
    try {
      factorial(-1)
    } catch(e) {
      err = e
    }
      expect(err).toBeInstanceOf(RangeError)
  })
  test('facorial of 12', () => {
    expect(factorial(12)).toStrictEqual('factorial for 12 is 479001600')
  })
})