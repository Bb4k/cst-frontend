
import React from "react";
import {BrowserRouter  as Router, Route, Routes} from "react-router-dom"
import Index from './components/Index'
import Login from "./components/Login"
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
            <Route index element = {<Index/>} />
            <Route path='/login' element = {<Login/>} />
            <Route path='/admin' element = {<AdminPanel/>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;