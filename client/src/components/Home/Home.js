import React from "react";
import "./home.css";
import { motion } from "framer-motion";
import Content from "./Content";
// import {Link} from 'react-router-dom'

const Home = () => {
  const scrollToContent = () => {
    window.contentRef.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="contanier">
        <header>
          <section>
            <h1 className="home-heading" data-aos="zoom-in-up">
              <spanhome>WELCOME TO</spanhome> <br />
            GOVERNMENT ASSOCIATE COLLEGE OF COMMERCE
              <br />KABIRWALA
            </h1>
            <motion.div
              className="bar"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
            ></motion.div>
            <div className="qoute">
              <h2>Discover, innovate, succeed.
              </h2>
              <motion.div
              className="home_main_btn"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <button className="main_btn_text" onClick={scrollToContent}>Principal Message</button>
            </motion.div>
            </div>
            
          </section>
        </header>
      </div>
      <Content />
    </>
  );
};

export default Home;
