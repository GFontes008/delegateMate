import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import CompanyList from "./components/CompanyList";
import RequestList from "./components/RequestList";
import PersonalDetails from "./components/PersonalDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/companies" component={CompanyList} />
        <Route path="/requests" component={RequestList} />
        <Route path="/personal-details" component={PersonalDetails} />
      </Switch>
    </Router>
  );
}

export default App;
