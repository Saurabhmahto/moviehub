import "./App.css";
import LandingPage from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import axios from "axios";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
function App() {
  const [startpage, setStartpage] = useState(true);
  // const [Fetchdata, setData] = useState([]);
  // const { isLoading, data } = useQuery("movie_list", () => {
  //   return axios.get(api);
  // });
  // console.log(data.data.results);
  // setData(data);
  // useEffect(() => {
  //   (async function () {
  //     let response = await fetch(api).then((res) => res.json());
  //     console.log(response);
  //     setData(response.results);
  //   })();
  // }, [api]);
  return (
    <>
      {startpage ? <LandingPage setStartpage={setStartpage} /> : <Homepage />}
      <ReactQueryDevtools />
    </>
  );
}

export default App;
