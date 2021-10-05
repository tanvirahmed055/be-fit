import { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import './App.css';


export const CopyRightContext = createContext('copyright');

function App() {
  const copyRightMessage = 'Copyright © 2021 BeFits. All Rights Reserved.';
  return (
    <CopyRightContext.Provider value={copyRightMessage}>
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>

      </div>
    </CopyRightContext.Provider>
  );
}

export default App;
