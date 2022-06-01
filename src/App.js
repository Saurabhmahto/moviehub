import "./App.css";
import LandingPage from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import axios from "axios";
import { useQuery } from "react-query";

function App() {
  const [startpage, setStartpage] = useState(true);
  const [title, setTitle] = useState("");
  const [api, setApi] = useState(
    `https://imdb-api.com/API/AdvancedSearch/k_buqtaqsw?title=${title}&countries=in&languages=hi&count=100`
  );
  const [Fetchdata, setData] = useState([]);
  // const { isLoading, data } = useQuery("movie_list", () => {
  //   return axios.get(api);
  // });
  // console.log(data.data.results);
  // setData(data);
  useEffect(() => {
    (async function () {
      let response = await fetch(api).then((res) => res.json());
      console.log(response);
      setData(response.results);
    })();
  }, [api]);
  return (
    <>
      {startpage ? (
        <LandingPage setStartpage={setStartpage} />
      ) : (
        <Homepage data={Fetchdata} setTitle={setTitle} setApi={setApi} />
      )}
    </>
  );
}

export default App;
