// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Max',
//   age: 25,
//   hobbies: ['sports', 'cooking'],
//   role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Max',
  age: 25,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN,
};

let favoriteArctivities: string[];
favoriteArctivities = person.hobbies;

console.log(person.name)

for ( const hobby of favoriteArctivities ) {
  console.log(hobby.toUpperCase())
}