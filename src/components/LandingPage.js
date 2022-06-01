import React from "react";
import styles from "./LandingPage.module.css";
// import "./images/tv.png";
import video1 from "./images/video-tv.m4v";
const LandingPage = ({ setStartpage }) => {
  return (
    <>
      <div className={styles.section_1}>
        <div className={styles.logo}>
          Movie<span className={styles.subtitle}>Hub</span>
        </div>
        <div className={styles.content_box}>
          <div className={styles.content_title}>
            <div className="line1">
              <h1>Information on movies,</h1>
            </div>
            <div className={styles.line2}>
              <h1>TV shows and more.</h1>
            </div>
          </div>
          <div className={styles.content_subtitle}>
            <p>Get infomation anywhere, anytime.</p>
          </div>
        </div>
        <div className={styles.btn_container}>
          <button
            className={styles.btn_start}
            onClick={() => {
              setStartpage(false);
            }}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className={styles.section_2}>
        <div className={styles.data}>
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className={styles.video_content}>
          <video
            src={video1}
            width="419px"
            height="235px"
            autoPlay
            loop
            muted
            className={styles.video_tv}
          />
        </div>
      </div>
      <div
        className={`${styles.section_3} d-flex flex-column align-items-center gap-4`}
      >
        <h1>Frequently Asked Questions</h1>
      </div>
    </>
  );
};

export default LandingPage;
