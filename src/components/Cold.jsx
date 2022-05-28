import "./cold.css";

const Cold = (props) => {
  return (
    <>
      <div className="backg">
        <div className="bx">
          <input onChange={(e) => props.handleChane(e)} type="text" />
          <h1>
            <span role="img">🥶</span>
          </h1>
          <h3>{props.temp} ~C</h3>
          <h2>{props.location}</h2>
        </div>
      </div>
    </>
  );
};

export default Cold;
