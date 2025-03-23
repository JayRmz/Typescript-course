function add(a: number, b: number): number {
    return a + b;
}

function log(message: string): void {
    // tslint:disable-next-line:no-console
    console.log(message);
}

function logAndThrow(errorMessage: string): never {
    // tslint:disable-next-line:no-console
    console.log(errorMessage);
    throw new Error(errorMessage);
}

function performJob(callback: (m: string) => void) {
    callback('Done!');
}

performJob(log);

type User = {
    name: string;
    age: number;
    greet: () => string;
};

let user: User = {
    age: 10,
    name: 'John',
    greet() {
        return this.name;
    },
};

user.greet();