import Navigation from "./Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./List";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
          <Route path="*">
            <h1>Page not found</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
