import { validPhoneNumber } from './validPhoneNumber'

describe('testing to see valid phone numbers', () => {

  //truthy
  test('xxx xxx xxxx', () => {
    expect(validPhoneNumber('123 456 7890')).toBeTruthy()
  })
  test('(xxx) xxx xxxx', () => {
    expect(validPhoneNumber('(123) 456 7890')).toBeTruthy()
  })
  test('xxx xxx-xxxx', () => {
    expect(validPhoneNumber('123 456-7890')).toBeTruthy()
  })
  test('(xxx) xxx-xxxx', () => {
    expect(validPhoneNumber('(123) 456-7890')).toBeTruthy()
  })
  test('xxx.xxx.xxxx', () => {
    expect(validPhoneNumber('123.456.7890')).toBeTruthy()
  })
  test('xxx-xxx-xxxx', () => {
    expect(validPhoneNumber('123-456-7890')).toBeTruthy()
  })
  test('xxxxxxxxxx', () => {
    expect(validPhoneNumber('1234567890')).toBeTruthy()
  })

  //falsy
  test('too few digits', () => {
    expect(validPhoneNumber('123456')).toBeFalsy()
  })
  test('too many digits', () => {
    expect(validPhoneNumber('1234567890123')).toBeFalsy()
  })
  test('letters', () => {
    expect(validPhoneNumber('hello\nwor ld')).toBeFalsy()
  })
  test('too many separators', () => {
    expect(validPhoneNumber('123--456--7890')).toBeFalsy()
  })
})
