// Write your solution in this file!
const employee = {name: "John", street:"Albany"}

function updateEmployeeWithKeyAndValue(obj, key, val){
    const newEmpl = {...employee, [key]: val}; 
    return newEmpl
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val) {
    obj[key] = val; 
    return obj; 

}

function deleteFromEmployeeByKey(employee, key) {
    const newEmpl = { ...employee};
    delete newEmpl[key]; 
    return newEmpl;

}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]; 
    return employee; 

}