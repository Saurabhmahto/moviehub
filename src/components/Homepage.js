import React from "react";
import styles from "./Homepage.module.css";
import Cards from "./UI/Cards";
import Navbar from "./UI/Navbar";

const Homepage = (props) => {
  return (
    <div className={styles.home}>
      <Navbar setApi={props.setApi} />
      <Cards data={props.data} />
    </div>
  );
};

export default Homepage;
