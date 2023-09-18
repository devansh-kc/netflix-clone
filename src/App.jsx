/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import requests from "./requests";
import Nav from "./Nav";
import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./LandingPage/Navbar/Login/SignIn";

function Main() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/maincontent" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
