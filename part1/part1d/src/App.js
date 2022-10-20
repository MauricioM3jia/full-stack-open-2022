import { useState } from "react";
import Button2 from './components/Button';

const History = (props) => {
  if(props.allClicks.length === 0){
      return (
          <div>
              the app is used by pressing the buttons
          </div>
      )
  }
  return (  
  <div>
      button press history: {props.allClicks.join('')}
  </div>
  );
}
  const Button = (props)=>{
    console.log(props);
    const {onClick,text}= props;
      return (<button onClick={onClick}>{text}</button>)    
  }

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [value,setValue]= useState(10)
  

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  const hello = (who)=>{
    
    return ()=>{
        console.log(`Hello`,who);
    }
  }

  const setToValue = (newValue)=>{
    console.log('value now',newValue);
    setValue(newValue)
  }

  return (
    <>
      <div>
        {left}
        <Button onClick={handleLeftClick} text='left'/>
        <Button onClick={handleRightClick} text='right'/> 
        {right}
        
        <History allClicks={allClicks}/>

        {value}
        <button onClick={hello('world')}>button</button>
        <button onClick={hello('react')}>button</button>
        <button onClick={hello('function')}>button</button>
        
        <div>
            {value}
            <Button2 handleClick={()=>setToValue(1000) } text ="thousand"/>
            <Button2 handleClick={()=>setToValue(0)} text ="reset"/>
            <Button2 handleClick={()=>setToValue(value + 1)} text ="increment"/>
            
        </div>
      </div>
    </>
  );
};

export default App;
