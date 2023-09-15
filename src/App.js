import React from 'react';
import Router from './Routes/Router';
import { MainContext } from './Context/Context';
import axios from "axios";

const App = () => {
  return (
    <div>
      <Router/>
    </div>
  )
}

export default App