export function countByX(number: number, times: number) {
  let count = 0
  let results = []
  while(count < times) {
    count++
    results.push(number * count)
  }
  return results
}
