import './App.css';
import DataPart from './New_component/DataPart'
import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import Login from './New_component/LoginFiles/Login.module';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const url ="https://randomuser.me/api/?results=100";
function App() {
  return(
    <DataPart/>
    
      
  );
}
export default App;
