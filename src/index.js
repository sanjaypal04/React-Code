import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './New_component/LoginFiles/Login.module';
import DataPart from './New_component/DataPart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './New_component/SignupFiles/Signup.module';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <App /> */}
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}>
          {/* <Route path="datapart" element={<DataPart />} /> */}
      </Route>
      <Route path="datapart" element={<App />}></Route>
      <Route path="signup" element={<Signup />}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);

reportWebVitals();
