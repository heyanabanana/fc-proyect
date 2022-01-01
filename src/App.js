import React from "react";
import { Route } from "wouter";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import CandidateForm from "./pages/CandidateForm";

// CSS styles
import "./styles/App.css";
import "primereact/resources/themes/lara-light-teal/theme.css";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Login} />
      <Route path="/dashboard" component={UserDashboard} />
      <Route path="/newcandidate" component={CandidateForm} />
    </div>
  );
};

export default App;
