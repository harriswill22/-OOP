
// Abstraction //Simpler interface by hiding properties and methods //Reduce impact of Change
// Inheritance Allows you to reduce redundant code
// Polymorphisim // allows you to get rid of many if else statements 
// Encapsulation
// Example

// BadWay
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary,overtime,rate) {  
    return baseSalary + (overtime * rate)
}

// OOP Way // Encapsulation
// Fewer Parameters in function
let employee ={
baseSalary:30_000,
overtime: 10,
rate: 20,

getWage: function () {  
    return this.baseSalary + (this.overtime * this.rate);

}
    };
employee.getWage();


