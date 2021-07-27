export function DNAStrand(dna: string): string {
  const DNAMap: { [char: string ]: string } = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  };
  dna.split('').forEach(i => {
    if(!DNAMap[i]){
      throw new Error('Invalid entry!');
    }
  });
  return dna.split('').map((i: string): string => DNAMap[i]).join('');
}
