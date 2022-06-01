import React from "react";
import styles from "./Cards.module.css";
const Cards = (props) => {
  return (
    <div className={`${styles.card}`}>
      <div className={styles.card_row}>
        {props.data ? (
          props.data.map((dt) => {
            return (
              <div className={styles.card_col} key={dt.id}>
                <img src={dt.image} alt="" className={styles.img_cont} />
                <div className={styles.rating}>
                  {dt.imDbRating}
                  <i className={`${styles.rating_icon} fa-solid fa-star`}></i>
                </div>
              </div>
            );
          })
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
};

export default Cards;
