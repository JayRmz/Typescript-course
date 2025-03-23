enum Role {
    Admin,
    Editor,
    Guest,
}

// let userRole: Role = 0; // 0 => Admin, 3 => Guest

let userRoleTwo: Role = Role.Admin;
userRoleTwo = Role.Editor;

// -- Literal Types
let userRole: 'admin' | 'editor' | 'guest' = 'admin';
userRole = 'editor';


let possibleResults: [1 | -1, 1 | -1];
possibleResults = [1, -1];
// possibleResults = [1, 5]; //Type error.

// -- Custom types | Type Aliases
type AnotherRole = 'admin' | 'editor' | 'guest';
type User = {
    age: number;
    name: string;
    role: AnotherRole;
    permissions: string[];
};


let anotherUserRole: AnotherRole = 'admin';
// function access(userRole: AnotherRole) {}