import { groupByCommas } from './groupByCommas'

describe('groupByCommas', () => {
  test('Add two commas', () => {
    expect(groupByCommas(12345678)).toEqual('12,345,678')
  })
  test('Add no commas', () => {
    expect(groupByCommas(12)).toEqual('12')
  })
  test('Add three commas', () => {
    expect(groupByCommas(123456789012)).toEqual('123,456,789,012')
  })
  test('Add one comma', () => {
    expect(groupByCommas(1234)).toEqual('1,234')
  })
})