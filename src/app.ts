function combine(input1: number | string, input2: number | string) {

  let result: number | string;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

// should be removed in compiled js

const combineAges = combine( 30, 26 );
const combineNames = combine( 'Max', 'Anna' );

console.log(combineAges, combineNames)

const test = () => {
  console.log("arrow function");
}

test()