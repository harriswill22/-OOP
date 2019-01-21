// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

// Constructor Function 
function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log('draw');
    }
}
const another = new Circle(1);


// Value vs Reference 


// Primitives are copied by their value 
// Object,Function,Array

// Objects are copied by their reference
// Number,String, Boolean, Symbol,undefined,null

// let x = {value: 10}
// let y = x;

// x.value = 20;

let obj = {value:10};
function increase (obj) { 
    obj.value++;
}
increase(obj);
console.log(obj);
