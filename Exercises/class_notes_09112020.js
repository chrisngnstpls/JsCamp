/* Objects */

/* 
var myObject = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObject.type = 'Dot syntax';
myObject['date created'] = '10 11 2020';
myObject[str] = 'String Value';
myObject[rand] = 'random number';
myObject[obj] = 'Object new';

console.log(myObject)


let objName = {
    name1:"Object",
    identity:"First"
}

// OR //

var objName2 = new Object();
objName2.name1 = "Object 2";
objName2.identity = "Second";

console.log(objName, objName2)


var tvObject = new Object()
tvObject = {
    size : 50,
    manufacturer : "Sony",
    modelName : 'tvModelXY22',
    isSmart : true,
    isAvailable : true,
    supportedApps : ['Netflix', 'Youtube', 'Spotify', 'Android']
}

console.log(tvObject)



var myCar ={

    make : 1992,
    model : 'carModel',
    color : 'red',
    engine : {size:3, cylinders:4}
}

console.log("object car: " + myCar);
console.log("object inside object: " + myCar.engine);



/* using the constructor for objects */

/*
function Poet(firstName, lastName, numberOfBooks){
    this.firstName = firstName;
    this.lastName = lastName;
    this.numberOfBooks = numberOfBooks;
}

const x = new Poet('Kiki', 'Dimoula', 50)
console.log(x);

*/

function Car(model, make, brand, engine, color){
    this.brand = brand;
    this.model = model;
    this.make = make;
    this.engine = engine;
    this.color = color;
}

const myHonda = new Car('accura', '2019', 'honda', {size:3, cylinders:4}, color='red')
console.log(myHonda)