import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home, About, Projects, Contact, Profile } from "./Contents";




export const Navigations = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/projects">
            <Projects />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
        <Route path="/profile">
            <Profile />
        </Route>
      </Switch>
    </Router>
  );
};
