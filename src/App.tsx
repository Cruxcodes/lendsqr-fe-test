import React from "react";
import Login from "./pages/LoginPage/Login";
import SideNav from "./components/Navigation/SideNav";
import Topnav from "./components/Navigation/Topnav";
import Card from "./components/Cards/Card";
import UserItem from "./components/UserTable/UserItem";
import UserTable from "./components/UserTable/UserTable";
import CardSection from "./components/Cards/CardSection";
import "./assets/style/main.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Login/>
      <Router>
        <SideNav />
        <Topnav />
        {/* <CardSection/>
         */}
        {/* <UserItem/> */}
        <UserTable />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
