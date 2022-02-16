import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Dashboard from './pages/Dashboard';
import CreatePoll from './pages/CreatePoll';
import Profile from './pages/profile';
import MyPoll from './pages/MyPolls';
import Login from './pages/login'
import Register from './pages/register'

const myTheme = createTheme({
  palette: {
    primary: {
      main: '#6366f1',
    },
  },
});

ReactDOM.render(
  <>
  <ThemeProvider theme={myTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard active="true"/>} />
        <Route path="mypoll" element={<MyPoll />} />
        <Route path="createpoll" element={<CreatePoll />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  </>,
  document.getElementById('root')
);

