import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

function App() {
  return (
    <Router>
      <header>
        {/* header content */}
      </header>
      <HeroSection />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />

      <footer>
        {/* footer content */}
      </footer>
    </Router>
  );
}

function HeroSection() {
  return (
    <section>
      {/* hero section content */}
    </section>
  );
}

export default App;
