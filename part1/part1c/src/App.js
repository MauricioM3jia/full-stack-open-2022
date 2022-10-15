import { useState } from "react";
import Button from "./components/Button";
import Display from './components/Display';

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setZero = () => setCounter(0);

  return (
    <>
      <div>
        {counter}

        <Display counter={counter}/>
        <Button onClick={increaseByOne}  text='Plus'/> 
        <Button onClick={setZero}  text='zero'/> 
        <Button onClick={decreaseByOne}  text='minus'/> 
      </div>
    </>
  );
};

export default App;
