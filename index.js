// Write your solution in this file!
const employee = {
    name: "Buffy Summers",
    streetAddress: {
        line1: "123 Vampire Dr",
        line2: "Sunnydale",
        line3: "California",
    },
};

//function 1
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}

//function 2
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

//function 3
function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };
    delete newObj.name;
    return newObj;
}

//function 4
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}