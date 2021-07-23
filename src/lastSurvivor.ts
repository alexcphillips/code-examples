export function lastSurvivor(letters: string, coords: number[]): string {
  let result = letters.split('')
  while(coords.length && result.length > 1) {
    coords.forEach(i => {
      result.splice(i, 1)
    })
    coords.shift()
  }
  return result[0]
}
