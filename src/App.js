import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchWeatherAction } from "./redux/slices/weatherSlices";

function App() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherAction("Goa"));
  }, []);

  const state = useSelector((state) => state);
  const { weather, loading, error } = state;
  console.log(state);
  return (
    <div className="main1">
      <div className="main">
        <div className="relative">
          <p className="mt">Weather</p>
          <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Search City"
            className="rounded"></input>
          <button onClick={() => dispatch(fetchWeatherAction(city))} type="button" className="items">Search</button>
        </div>
        {loading ? (
          <h1 className="text">Please wait..</h1>
        ) : error ? (
          <h1 className="red">{error?.message}</h1>
        ) : (

          <div className="border">
            <p className="center">{weather?.weather[0].main}, {" "} {Math.ceil(Number(weather?.main.temp))}{" "}
              <span className="yellow">°F</span>
            </p>
            <p className="xl "> {weather?.name}, {weather?.sys?.country} </p>
            <p className="mb">
              City- {weather?.name},{" "} {weather?.sys?.country} <br />
              Description- {" "}{weather?.weather[0].description} <br />
              Temperature- {" "} {Math.ceil(Number(weather?.main.temp))}<br />
              Humidity- {" "} {""}{weather?.main?.humidity} %
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;