const intToString = (() => {
  const nums = {
    0: 'zero',
    1: 'um',
    2: 'dois',
    3: 'três',
    4: 'quatro',
    5: 'cinco',
    6: 'seis',
    7: 'sete',
    8: 'oito',
    9: 'nove',
    10: 'dez',
    11: 'onze',
    12: 'doze',
    13: 'treze',
    14: 'quatorze',
    15: 'quinze',
    16: 'dezesseis',
    17: 'dezessete',
    18: 'dezoito',
    19: 'dezenove',
    20: 'vinte',
    30: 'trinta',
    40: 'quarenta',
    50: 'cinquenta',
    60: 'sessenta',
    70: 'setenta',
    80: 'oitenta',
    90: 'noventa',
    100: 'cem',
    200: 'duzentos',
    300: 'trezentos',
    400: 'quatrocentos',
    500: 'quinhentos',
    600: 'seiscentos',
    700: 'setecentos',
    800: 'oitocentos',
    900: 'novecentos',
  }
  const numericalUnit = (num) => {
    switch (num.length) {
      case 1:
        return 'unit'
        break;
      case 2:
        if (numStringFied[0] == 1) {
            return 'unit'
        }
        return 'ten'
      case 3:
        return 'hundred'
      default:
        break;
    }
  }

  const intToStringUnit = (num) => nums[num]
  const intToStringTen = (num) => nums[`${numStringFied[0]}0`]
  const intToStringHundred = (num) => nums[`${numStringFied[0]}00`]

  const calc = (num) => {
    numStringFied = num.toString()
    switch (numericalUnit(numStringFied)) {
        case 'unit':
          return intToStringUnit(num)
          break;
        case 'ten':
          let ten = intToStringTen(num)
          if (numStringFied[1] !== '0') {
            return `${ten} e ${nums[numStringFied[1]]}`
          }
          return ten
          break;
        case 'hundred':
          hundred = intToStringHundred(num)
          if(numStringFied[1] !== '0') {
            let ten = intToString(parseInt(numStringFied[1] + numStringFied[2]))
            return `${hundred} e ${ten}`
          } else if (numStringFied[2] !== '0') {
            let unit = intToString(parseInt(numStringFied[2]))
            return `${hundred} e ${unit}`
          }
          return hundred
          break;
        default:
          break;
    }
  }

  return calc
    
})()

console.log(intToString(999));
