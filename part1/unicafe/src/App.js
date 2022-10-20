import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleGoodButton = ()=>{
      return(
        setGood(good + 1)
      )
  }

  const handleNeutralButton = ()=>{
    return (
        setNeutral(neutral +1)
    )
  }
  const handleBadButton=()=>{
      return (

        setBad(bad+1)
      )
  }
  return (<>

    <div  className="container">

      <h1 className="text-center mt-5">Give us a feedback</h1>
      
     <div className="text-center  mt-3">  

         <Button handleButton={handleGoodButton} text='good' />
         <Button handleButton={handleNeutralButton} text='neutral' />
         <Button handleButton={handleBadButton} text='bad' />
    
     </div>
     <div className="text-center mt-3">

      <h1>Statistics</h1>
     <Statistics good={good} neutral={neutral} bad={bad}/>
     </div>
       
    </div>
        
       
  </>);
};

export default App;
