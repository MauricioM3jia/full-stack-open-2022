import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  // Object method "this"
  const arto = {
    name:'Arto Hellas',
    age:35,education:'PhD',
    greet:function(){
        console.log(`hi, my name is ` + this.name);
    },
    doAddition:function(a,b){
      console.log(a+b);

    }
  }
  arto.greet();
  arto.growOlder = function(){
    this.age += 1;
  }
  console.log(arto.age);
  arto.growOlder()
  console.log(arto.age);

  arto.doAddition(1,4)
  const referenceToAddition = arto.doAddition;
  referenceToAddition(10,15)
  arto.greet();
  const referenceToGreet = arto.greet;
  referenceToGreet();//we get an error, cant find the greet value
  setTimeout(arto.greet,1000) //easy way to fix it is by adding a setTimeout function or
  setTimeout(arto.greet.bind(arto),1000)
  //Calling arto.greet.bind(arto) creates a new function where this is bound to point to Arto, independent of where and how the method is being called.
  class Person {
    constructor (name,age){
      this.name = name
      this.age = age

    }
    greet(){
      console.log('hi, my name is '+ this.name);
    }
  }
  const adam = new Person('Adam Ondra',29)
  adam.greet();
  const janja = new Person('Janja Garnbret',23);
  janja.greet();
  return <div>
  <Header  course={course}/>
  <Content parts={parts} />
  <Total  parts={parts}/> 
  </div>;
};

export default App;
