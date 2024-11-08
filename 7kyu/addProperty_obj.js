// 🎯 Add a property to an object

//❓ DESCRIPTIONS
// Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.

// ✅ SOLUTIONS
// 1 variant

function addProperty(obj, prop, value) {
    // Check if the property already exists
    if (obj.hasOwnProperty(prop)) {
        throw new Error(`Property "${prop}" already exists on the object.`);
    }
    
    // Add the property with the given value
    obj[prop] = value;
}

// 2 variant
function addProperty(obj, prop, value) {
    if (prop in obj) throw new Error()
    obj[prop] = value
  }

// 3 variant
function addProperty(obj, prop, value) {
    if (obj.hasOwnProperty(prop)) throw "Error: Property already present";
    
    obj[prop] = value;
  }

// 4 variant
const addProperty = (obj, prop, value) =>
    prop in obj ? (() => {throw new Error()})() : obj[prop] = value;

// 5 variant
function addProperty ( obj, prop, value ) {
    if ( obj.hasOwnProperty(prop) ) throw new Error(`property "${prop}"" is already exists`);
    
    obj[prop] = value;
  }

