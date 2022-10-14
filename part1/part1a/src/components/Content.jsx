const Content = (props) => {
    return ( 
        <div>
             <p>Part  # {props.id1}: {props.partNumber1} {props.exercise1}</p>
             <p>Part  # {props.id2}: {props.partNumber2} {props.exercise2}</p>
             <p>Part  # {props.id3}: {props.partNumber3} {props.exercise3}</p>
        </div>
     );
}
 
export default Content;