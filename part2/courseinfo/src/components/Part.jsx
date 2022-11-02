const Part = ({part})=>{
    return(<>
       
         <h4 key={part.id}>{part.name}  {part.exercises}</h4>
       
    </>);
  
  }
  export default Part;