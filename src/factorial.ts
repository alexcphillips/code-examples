export function factorial(n: any): any {
  if(n === 0) {
    return 'factorial for 0 is 1'
  }
  if( n > 12 || n < 0) {
    throw new RangeError('Only numbers between 0 and 12, please')
  }
  return `factorial for ${n} is ` + Array(n).fill(n).reduce((accu, current, index) => accu *= index)
}
