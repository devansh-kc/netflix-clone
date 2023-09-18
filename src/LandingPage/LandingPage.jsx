import React from "react";
import Navbar from "./Navbar/Navbar";
import GetStarted from "./getStartedPage/GetStarted";
import "./landing.css";
import PageProp from "./PageProp/PageLeft/PageProp";
import PageRight from "./PageProp/PageLeft/Pageright/pageRight";
import Faq from "./FAQs/Faq";

function LandingPage() {
  return (
    <div className="landing">
      <div className="background-image">
        <Navbar />
        <GetStarted />
      </div>
      <PageRight
        para="Watch on smart TVs, PlayStation, Xbox,Chromecast, Apple TV
      Blu-ray players and more"
        heading="Enjoy on your TV"
        image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
      />
      <PageProp
        para="Save your favourites easily and always have something to watch."
        heading="Download your shows to watch offline"
        image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
      />{" "}
      <PageRight
        style={{}}
        heading="Watch everywhere"
        para="Stream unlimited movies and TV shows on your phone, tablet, laptop,and TV."
        image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
      />
      <PageProp
        para="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        heading="Create profiles for kids"
        image="https://occ-0-3061-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
      />
      <Faq />
    </div>
  );
}

export default LandingPage;
