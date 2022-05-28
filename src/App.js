import "./styles.css";
import Cold from "./components/Cold";
import Warm from "./components/Warm";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [input, UpdateInput] = useState("Mumbai");
  const [temp, SetTemp] = useState(0);

  const handleChane = (e) => {
    let val = e.target.value;
    UpdateInput(val);
  };

  useEffect(() => {
    async function fetcWeather() {
      let data = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=490b7572c175706f7eb97968eb779eb3`
      );
      SetTemp(data.data.main.temp);
    }
    fetcWeather();
  }, [input]);

  return (
    <>
      <div>
        {temp > 25 ? (
          <Warm handleChane={handleChane} temp={temp} location={input} />
        ) : (
          <Cold handleChane={handleChane} temp={temp} location={input} />
        )}
      </div>
    </>
  );
}
