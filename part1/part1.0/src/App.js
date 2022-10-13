const Hello = (props)=>{
    return (
      <div>
          <p>
              Hello {props.name},you are {props.age} years old
          </p>
      </div>
    );
}

const Footer =()=>{
   
  return( <div>

    <p>greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a></p> 
 </div>);
 
}

function App() {

  console.log('hello components')
  const now = new Date()
  const a = 10
  const b = 20
  const name = 'Peter'
  const age=10;
  return (
   <div>
      <h1>Hello Greetings</h1>
      <p>hello world, it is {now.toString()}</p>
      <p>{a} plus {b} is {a+b}</p>
      <Hello name='Roger' age={26+10}/>
      <Hello name={name} age={age} />
      <Footer />
   </div>
  );
}

export default App;
