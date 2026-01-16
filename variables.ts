let username: string = "Ivan";
let age: number = 18;
let isStudent: boolean = true;

console.log("Name:", username);
console.log("Alter:", age);
console.log("Ist Student:", isStudent);

function greet(name: string): string {
    return "Hallo " + name + "!";
}

console.log(greet("Ivan"));

let numbers: number[] = [1, 2, 3, 4, 5];

numbers.forEach((n) => {
    console.log(n);
});
