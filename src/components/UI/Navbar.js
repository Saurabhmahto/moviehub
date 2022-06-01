import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ setKey, setApi }) => {
  const [input_value, setInput_value] = useState("");
  const [input, setInput] = useState("");
  return (
    <div className={styles.navbar}>
      <div className={styles.nav_logo}>
        Movie<span>Hub</span>
      </div>
      <div className={styles.nav_links}>
        <div
          className={styles.nav_link_item}
          onClick={() => {
            setKey("home");
            setApi(
              "https://imdb-api.com/API/AdvancedSearch/k_buqtaqsw?countries=in&languages=hi&count=100"
            );
          }}
        >
          Home
        </div>
        <div
          className={styles.nav_link_item}
          onClick={() => {
            setKey("TV_series");
            setApi(
              `https://imdb-api.com/API/AdvancedSearch/k_buqtaqsw?title_type=tv_series&countries=in&languages=hi`
            );
          }}
        >
          TV series
        </div>
        <div className={styles.nav_link_item} onClick={() => {}}>
          Movie
        </div>
      </div>
      <div className={styles.nav_search}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search movies, shows etc."
          value={input_value}
          autoComplete="off"
          onChange={(e) => {
            setInput(e.target.value);
            setInput_value(e.target.value);
            // setTitle(e.target.value);
            // if (e.target.value === null) {
            //   setApi(
            //     `https://imdb-api.com/API/AdvancedSearch/k_buqtaqsw?countries=in&languages=hi&count=100`
            //   );
            // } else {
            //   setApi(
            //     `https://imdb-api.com/en/API/SearchMovie/k_buqtaqsw/${e.target.value}`
            //   );
            // }
          }}
        />
        <button
          className={styles.button_search}
          type="submit"
          onClick={() => {
            setKey(input);
            setApi(
              `https://imdb-api.com/en/API/SearchMovie/k_buqtaqsw/${input}`
            );
          }}
        >
          <i
            className={`${styles.search_icon} fa-solid fa-magnifying-glass`}
          ></i>
        </button>
      </div>
      <div className={`${styles.dropdown_container} dropdown`}>
        <i className={` ${styles.country_logo} fa-solid fa-globe`}></i>
        <div
          className="dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></div>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              India
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Usa
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              China
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
