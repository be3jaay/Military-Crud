import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import Spinner from './components/pages/users/Home/Spinner';

/* users */
import Signup from './components/pages/users/Auth/registration';
import Login from './components/pages/users/Auth/login';
import ForgetPassword from './components/pages/users/Auth/forgetPassword';
import ResetPassword from './components/pages/users/Auth/resetPassword';
import Userdashboard from './components/pages/users/Home/Pages/userdashboard';
import Profile from './components/pages/users/Home/Pages/profile';
import ViewAnalytics from './components/pages/users/Home/Pages/viewAnalytics';
import Activities from './components/pages/users/Home/Pages/activities';

/* admin */
import AuthAdmin from './components/pages/admin/auth';
import AdminAnalytics from './components/pages/admin/adminAnalytics';
import Pending from './components/pages/admin/Home/pending';
import AdminProfile from './components/pages/admin/Home/adminProfile';
import Accepted from './components/pages/admin/Home/accepted';

import './App.css';

function App() {
  /* spinner loading */
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useContext(AuthContext); // Get authentication state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Clear the timeout when component unmounts or when loading state changes
    return () => clearTimeout(timer);
  }, []); // This effect runs only once on component mount

  // Prevent rendering routes until loading state is false
  if (loading) {
    return <Spinner />;
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Users */}
          <Route path="/" element={isAuthenticated ? <Navigate to="/userdashboard" /> : <Login />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/userdashboard" /> : <Login />} /> 
          <Route path="/registration" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          
          <Route
            path="/userdashboard"
            element={isAuthenticated ? <Userdashboard /> : <Navigate to="/userdashboard" />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/viewAnalytics"
            element={isAuthenticated ? <ViewAnalytics /> : <Navigate to="/login" />}
          />
          <Route
            path="/activities"
            element={isAuthenticated ? <Activities /> : <Navigate to="/login" />}
          />

          {/* Admin */}
          <Route path="/admin/auth" element={<AuthAdmin />} />
          <Route path="/adminAnalytics" element={<AdminAnalytics />} />
          <Route path="/adminProfile" element={<AdminProfile />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/accepted" element={<Accepted />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
