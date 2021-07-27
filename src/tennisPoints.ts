export function tennisGamePoints(score: string): number{
  const scoreMap: { [char: string ]: any } = {
    'love': '0',
    '15': 1,
    '30': 2,
    '40': 3,
  }
  
  return score.split('-').map((i, index, array) => scoreMap[i] || scoreMap[array[index - 1]]).reduce((a, b) => +a + +b)
}
