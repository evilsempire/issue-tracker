import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./components/Projects";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Projects />} />

        <Route
          exact
          path="/project/:id"
          component={props => <Project {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
