let hobbies = ['sports', 'cooking'];

// hobbies.push(10); // Error

let users: string[]; // Array of string
let usersComplex: (string | number)[]; // Array of string or numbers
// let usersComplex: Array<string | number>; // Array of string or numbers in generic type

usersComplex = [1, 'Max'];
usersComplex = [10, 50];
usersComplex = ['Jon', 'Doe'];


let possibleResults: [number, number]; // Tuple, fixes an fixed length of an array and type.
possibleResults = [1, -1];
// possibleResults = [5, 10 ,15]; // Tuple error

// Objects
let user: {
    age: number;
    name: string;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    age: 5,
    hobbies: ['nothing'],
    name: 'John',
    role: {
        description: 'Developer',
        id: 1,
    },
};


const val: {} = 'some text'; // Must not be null or undefined


let data: Record<string, number | string>;

data = {
    entry1: 1,
    entry2: '2',
};

