export {} // Para não reclamar de variáveis duplicadas

let employee = {
    code: 10,
    name: "John"
}
employee.code = 10
employee.name = "John";

let employee2: {code: number, name: string} = {
    code: 10,
    name: 'John'
}

interface employee {
    code:number,
    name:string,
}

let employee3: employee = {
    code: 200,
    name: "John"
}

const employeeObj = {} as employee
employeeObj.code = 10;
employeeObj.name = "John";

const employeeObj2: employee = {
    code: 10,
    name: "John"
}