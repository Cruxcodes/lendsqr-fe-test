import React from "react";
import Login from "./pages/LoginPage/Login";
import SideNav from "./components/Navigation/SideNav";
import Topnav from "./components/Navigation/Topnav";
import Card from "./components/Cards/Card";
import UserItem from "./components/UserTable/UserItem";
import UserTable from "./components/UserTable/UserTable";
import CardSection from "./components/Cards/CardSection";
import "./assets/style/main.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

function DashboardLayout() {
  return (
    <>
      <SideNav />
      <Topnav />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/login" element={<Login />} />
          <Route  path="/*" element={<Login />} />

          {/* <Route path="/dashboard">
            <SideNav />
            <Topnav />
            <Route path="/table" element={<UserTable />} />
          </Route> */}
          <Route path="/dashboard/" element={<DashboardLayout />}>
            <Route path="user" element={<UserTable />} />
          </Route>
        </Routes>

        {/* <CardSection/>
         */}
        {/* <UserItem/> */}
      </Router>
    </div>
  );
}

export default App;
