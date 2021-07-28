export class RomanNumerals {
  static numeralMap: { [char: string ]: number } = { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1 };
  
  static toRoman(number: number): string {
    let answer = ''
    for(let numeral in this.numeralMap) {
      while(number >= this.numeralMap[numeral]) {
        answer += numeral;
        number -= this.numeralMap[numeral];
      }
    }
    return answer;
  }

  static fromRoman(numeral: string): any {
    return numeral.match(/CM|CD|XC|XL|IX|IV|\w/g)?.reduce((acc, el) => acc + this.numeralMap[el], 0)
  }
}
