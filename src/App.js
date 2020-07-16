import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Gallery} from "./components/gallery/gallery";
import {Header} from "./components/header/header";
import {SearchBlock} from "./components/searchblock/searchBlock";
import {Footer} from "./components/footer/footer";
import {FilterBlock} from "./components/gallery/filterblock/filterBlock";

function App() {
  return (
      <BrowserRouter>
          <div className="galleryPage">
              <Header/>
              <SearchBlock/>
              <Gallery/>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
