export function tennisTalk(score: string): string {
  const scoreMap: { [char: string ]: string } = {
    0: 'love',
    1: '15',
    2: '30',
    3: '40',
  };
  return score.split('-').map((i) => scoreMap[i]).reduce((a, b) =>  a === b && `${a}-all` || `${a}-${b}`);
}
