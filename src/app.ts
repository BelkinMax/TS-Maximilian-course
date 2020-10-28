const add = (a: number, b: number = 5) => a + b;
console.log(add(5))

const person = {
  name: 'Max',
  age: 25
}

const copiedPerson = {
  ...person
}

console.log(person);
console.log(copiedPerson);
console.log(person === copiedPerson);

const addMore = (...numbers: number[]) => {
  return numbers.reduce((curRes, curVal) => {
    return curRes + curVal;
  }, 0)
};
console.log(addMore(5, 5, 4, 2, 1))

// array distructuring

const hobbies: string[] = ['cooking', 'hiking', 'coding', 'running'];

const [h1, h2, ...rest] = hobbies;

console.log(hobbies, h1, h2, rest);

