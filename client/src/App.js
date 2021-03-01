import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from './components/Navbar/navbar';
import Home from "./pages/Home/home";
import About from "./pages/About/about";
// import Projects from "./pages/Projects/projects";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/projects" component={Projects} /> */}
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
