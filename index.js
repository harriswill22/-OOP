// Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(17);

// Constructor Function 
function Circle(radius) {
    this.radius = radius
    let defaultLocation = {x: 0, y:0};
    this.draw = function () {
    this.getDefaultLocation = function () { 
        return defaultLocation
    }
        console.log('draw');
    };
    Object.defineProperty(this, 'defaultLocation', {
        get: function () { 
            return defaultLocation;
        },
        set: function (value) {  
            if (!value.x || value.y)
            throw new Error('Invalid location');

            defaultLocation = value;
        }
    });
}
const circle = new Circle(10);

circle.draw();














// Enumerating Properties
// for (let key in circle) {
//     if(typeof circle[key !== 'function'])
//     console.log(key,circle[key]);
    
// }
// const keys = Object.keys(circle)
// console.log(keys);

// if ('radius' in circle)
// console.log('Circle has a radius');





// Adding and removing Properties
// circle.propertyName = 'center location'
// circle.location = {x: 1}

// delete circle.[location];







// Value vs Reference 


// Primitives are copied by their value 
// Object,Function,Array

// Objects are copied by their reference
// Number,String, Boolean, Symbol,undefined,null

// let x = {value: 10}
// let y = x;

// x.value = 20;

// let obj = {value:10};
// function increase (obj) { 
//     obj.value++;
// }
// increase(obj);
// console.log(obj);
