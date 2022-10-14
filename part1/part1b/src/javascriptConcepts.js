const x =1;
let y = 5;
console.log(x,y);
y =+10
console.log(x,y);
y='sometext'
console.log(x,y)
// x=4; // it will print error

//!! arrays
const t = [1,-1,3];

t.push(5)

console.log(t.length);
console.log(t[1]);
t.forEach(value =>{
    console.log(value)
})

const t2 = t.concat(5)
console.log(t);
console.log(t2);

const m1 = t.map(value => value*2)
console.log(m1)

const m2 = t.map(value =>'<li>' + value +'</li>')
console.log(m2);

const t3 = [1,2,3,4,5]
const [first,second,...rest]=t3

console.log(first,second);
console.log(rest)

const object1 = {
        name: "Richard Parker",
        age:35,
        education:"University"
}
const object2 = {
    name: "Full stack web application development",
    level:'intermediate studies',
    size:5
}
const object3 = {
    name:{
        first:'Cameron',
        last:'smith'
    },
    grades:[2,3,5,3],
    department:'Standford University'
}
console.log(object1.name);
const fieldName = 'age'
console.log(object1[fieldName]);
//You can also add properties to an object on the fly by either using dot notation or brackets:

object1.address = 'Helsinki'
object1['secret number']=1234

//!!! functions 
//arrow functions
const sum = (p1,p2)=>{
    console.log(p1)
    console.log(p2);
    return p1+p2
}

const result = sum(1,5)
console.log(result);


const square = p =>{
    console.log(p)
    return p*p
}

const anotherSquare =p=>p*p

console.log(anotherSquare(5));


//regular function

function product(a,b){
    return a*b
}

const suma = product(2,6)
console.log(suma);





































