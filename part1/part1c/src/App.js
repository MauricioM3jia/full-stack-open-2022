
const Hello = (props) => {
  console.log(props);

const {name,age} = props;
    const bornYear= ()=> new Date().getFullYear()-age;
  return (  
    <div>
        <p> {name}, you are {age} years old</p>

        <p>So you were probably born in {bornYear()}</p>
    </div>
  );
}
 


const App = () => {
 
  const name = 'Peter'
  const age = 10
  
  return ( 
    <>
    <div>
      <h1> Greetings</h1>
      <Hello name='Henry' age={24}/>
      <Hello name={name} age={age}/>
      
    </div>
    </>
   );
}
 
export default App;
