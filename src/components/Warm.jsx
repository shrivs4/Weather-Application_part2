import "./warm.css";

const Warm = (props) => {
  return (
    <>
      <div className="background">
        <div className="box">
          <input onChange={(e) => props.handleChane(e)} type="text" />
          <h1>
            <span role="img">🌝</span>
          </h1>
          <h3>{props.temp} ~C</h3>
          <h2>{props.location}</h2>
        </div>
      </div>
    </>
  );
};

export default Warm;
