const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Max',
  age: 25,
  hobbies: ['sports', 'cooking'],
  role: [2, 'author']
};

let favoriteArctivities: string[];
favoriteArctivities = person.hobbies;

console.log(person.name)

for ( const hobby of favoriteArctivities ) {
  console.log(hobby.toUpperCase())
}