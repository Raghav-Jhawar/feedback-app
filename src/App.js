import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {FeedbackProvider} from './context/FeedbackContext'
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackInput from "./components/FeedbackInput";
import FeedbackStats from "./components/FeedbackStats";
import AboutPageLink from "./components/AboutPageLink";
import AboutPage from "./Pages/AboutPage";

const App = () => {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
              {/* Route for home page */}
              <Route path="/" element={ 
                <>
                <FeedbackInput/>
                <FeedbackStats />
                <FeedbackList />
                </>
              } /> 
              
              {/* Route for about page */}
              <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutPageLink />
        </div>   
      </BrowserRouter>
    </FeedbackProvider>
  )
};

export default App;
