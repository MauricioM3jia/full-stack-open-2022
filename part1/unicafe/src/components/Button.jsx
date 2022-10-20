const Button = (props) => {

  if (props.text === "good") {
    return (
      <>
        <button onClick={props.handleButton} className={"btn btn-outline-success rounded-0"}>
          {props.text}
        </button>
      </>
    );
  }

  if (props.text === "neutral") {
    return (
      <>
        <button onClick={props.handleButton} className="btn btn-outline-warning rounded-0">
          {props.text}
        </button>
      </>
    );
  }
  if (props.text === "bad") {
    return (
      <>
        <button onClick={props.handleButton} className="btn btn-outline-danger rounded-0">
          {props.text}
        </button>
      </>
    );
  }
};

export default Button;
