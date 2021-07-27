import { DNAStrand } from './DNA'

describe('DNA function', () => {
  test('Does it work?', () => {
    expect(DNAStrand('ATTGC')).toStrictEqual('TAACG')
  });
  test('Invalid string', () => {
    let err;
    try {
      DNAStrand('QWASZX@')
    } catch(e) {
      err = e
    };
      expect(err).toBeInstanceOf(Error)
  });
})
