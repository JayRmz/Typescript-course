let userName: string;
let userAge: number;
userName = 'John aDoe';
userAge = 40;

function add(a: number, b: number = 5) {
    return a + b;
}

add(10);
// add('10'); //Error
add(10, 6);
// add(2,'7'); //ERROR

