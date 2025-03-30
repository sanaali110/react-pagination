import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Display from "./components/Display";

// export const apiConfig - then import like below
import { apiConfig, itemsPerPage } from "./utils/constants";

// export default apiConfig - then use import like this
// import apiConfig from "./utils/constants";
// import { itemsPerPage } from "./utils/constants";

function App() {
  /**Defining keys and url */
  const {weatherAPI,maxrows,API_KEY,lang} = apiConfig
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
      <Display page={page} itemsPerPage={itemsPerPage} data={data} />
      <Footer page={page} itemsPerPage={itemsPerPage} totalNoOfItems={data.length} setPage={setPage} />
    </div>
  );
}

export default App;
