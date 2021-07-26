export function DNAStrand(dna: string): string {
  const DNAMap: { [char: string ]: string } = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  };
  return dna.split('').map((i: string): string => DNAMap[i]).join('')
}
