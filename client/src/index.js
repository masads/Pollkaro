import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import CreatePoll from './pages/CreatePoll';
import Profile from './pages/profile';
import MyPoll from './pages/MyPolls';
import Login from './pages/login'
ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        
        <Route path="dashboard" element={<Dashboard active="true"/>} />
        <Route path="mypoll" element={<MyPoll />} />
        <Route path="createpoll" element={<CreatePoll />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

