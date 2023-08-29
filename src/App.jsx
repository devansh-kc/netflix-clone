/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import requests from "./requests";
import Nav from "./Nav";
import Navbar from "./LoginScreen/Navbar";
import Banner2 from "./LoginScreen/Banner2";

function App() {
  return (
    <div className="app">
      {/* <Navbar />
      <Banner2 /> */}
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
