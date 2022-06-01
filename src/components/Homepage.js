import React, { useState } from "react";
import { useQuery } from "react-query";
import styles from "./Homepage.module.css";
import Cards from "./UI/Cards";
import Navbar from "./UI/Navbar";

const Homepage = () => {
  const [key, setKey] = useState("home");
  const [api, setApi] = useState(
    "https://imdb-api.com/API/AdvancedSearch/k_buqtaqsw?countries=in&languages=hi&count=100"
  );
  const { data, isFetching, isLoading } = useQuery(["api", key], () => {
    return fetch(api).then((res) => res.json());
  });

  return (
    <>
      {isLoading ? (
        <div className={styles.home}>
          <Navbar setApi={setApi} setKey={setKey} />
          <div class={styles.center}>
            <div class={styles.wave}></div>
            <div class={styles.wave}></div>
            <div class={styles.wave}></div>
            <div class={styles.wave}></div>
            <div class={styles.wave}></div>
            <div class={styles.wave}></div>
            <div class={styles.wave}></div>
            <div class={styles.wave}></div>
            <div class={styles.wave}></div>
            <div class={styles.wave}></div>
          </div>
        </div>
      ) : (
        <div className={styles.home}>
          <Navbar setApi={setApi} setKey={setKey} />
          <Cards data={data.results} />
        </div>
      )}
    </>
  );
};

export default Homepage;
