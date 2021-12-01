import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from './pages/Login/Signup';
import Home from './pages/Home/Home';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import ForgetPassword from './pages/Login/ForgetPassword';
import AllPlans from './pages/Plan/AllPlans';
import AuthProvider from './context/AuthProvider';
import Profile from './pages/Profile/Profile';
import PlanDetail from './pages/PlanDetail/PlanDetail';

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgetPassword">
            <ForgetPassword />
          </Route>
          <Route path="/allPlans">
            <AllPlans />
          </Route>
          <Route path="/profilePage">
            <Profile />
          </Route>
          <Route path="/planDetail/:id">
            <PlanDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;