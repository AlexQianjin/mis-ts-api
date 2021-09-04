interface Employee {
  name: string;
  age: number;
  gender: string;
}

function display(employee: Employee): void {
  console.log(`My name is ${employee.name}, I'm ${employee.age} years old`);
}

export { display };
