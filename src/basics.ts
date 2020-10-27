function add(n1: number, n2: number, showRes: boolean, phrase: string) {

  const result = n1 + n2;
  if( showRes === true ) {
    console.log( phrase + result );
  } else {
    return n1 + n2;
  }
}

let num1: number = 5;
let num2: number = 2.8;

const printRes = true;
const resultPhrase = 'The result is: '

const result = add(num1, num2, printRes, resultPhrase);