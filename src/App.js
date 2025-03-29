import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Display from "./components/Display";

function App() {
  /**Defining keys and url */
  const API_KEY = "uGE6w6AvsFXrGdAE0UpB4oTWEzfZ05E9";
  const weatherAPI =
    "http://dataservice.accuweather.com/currentconditions/v1/topcities/";
  const lang = "en-gb";
  const maxrows = 50;
  const url = `${weatherAPI}${maxrows}?apikey=${API_KEY}&language=${lang}`;

  /**Defining State */
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]); // This runs every time `data` changes

  /**Fetching the data from the API */
  const fetchWeatherData = async () => {
    try {
      const res = await fetch(url);
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log("Fetching error", error);
    }
  };
  return (
    <div className="App">
      <h1>Weather for cities</h1>
      {<Display page={page} data={data} />}
      <Footer page={page} setPage={setPage} />
    </div>
  );
}

export default App;
