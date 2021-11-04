import * as React from "react";
import Completed from './forms/Completed';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Step1 } from "./forms/Step1";
import { Step2 } from "./forms/Step2";

export default function App(): JSX.Element {
  return (
    <div className="App">
      {/* <h2>Form multi-step with Redux and React Hooks</h2> */}
      <Router>
        <Route exact path="/" component={Step1}/>
        <Route path="/set-password" component={Step2}/>
        <Route path="/completed" component={Completed}/>
      </Router>
    </div>
  );
};