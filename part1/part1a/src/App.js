
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'using props to pass data'
  const exercise2 = 7
  const part3= 'State of component'
  const exercise3 = 14


  return (
    <div >
      
        <Header title={course}/>
        <Content  id1='1' partNumber1 ={part1} exercise1={exercise1}  id2='2'partNumber2 ={part2} exercise2={exercise2}   exercise3={exercise3}  id3='3'partNumber3 ={part3}/>

        <Total exercises1={exercise1} exercises2={exercise2} exercises3={exercise3}/>
     
       

    

    </div>
  );
}

export default App;
