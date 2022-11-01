import { useState } from "react";
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote,setVote] =useState(new Array(anecdotes.length).fill(0))

  const anecdoteHandler = () => {
    return setSelected(Math.floor(Math.random() * anecdotes.length))
  };

  const voteHandler = () => {
    const copy = [...vote]
    copy[selected] +=1
    setVote(copy)
  };

  return (
    <>
    <div className="container">
    <p className="text-center"> {anecdotes[selected]} </p>
     <h3 className="text-center"> -has {vote[selected]} votes</h3>
      <button onClick={voteHandler}>vote</button>{" "}
      <button onClick={anecdoteHandler}>next ancdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[vote.indexOf(Math.max(...vote))]}</p>
      <p> has {Math.max(...vote)} votes </p>
    </div>
   
    </>
  );
};

export default App;
