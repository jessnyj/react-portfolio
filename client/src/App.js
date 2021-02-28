import React from 'react';
import Navbar from './components/Navbar/navbar';
import Home from "./pages/Home/home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
