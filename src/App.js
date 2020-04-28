import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from "react-router-dom"
import './App.scss'
import logo from './logo.png';
import 'antd/dist/antd.css';
import Home from "./page/home"
import Button from "./page/button"
import Container from "./page/container"
import Image from "./page/image"
import List from "./page/list"
import Nav from "./page/nav"
import Slider from "./page/slider"
import Text from "./page/text"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-header"> 
          <div className="logo"><img src={logo} alt="logo"/></div>
          <header className="header">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/button">Button</NavLink>
            <NavLink to="/container">Container</NavLink>
            <NavLink to="/image">Image</NavLink>
            <NavLink to="/list">List</NavLink>
            <NavLink to="/nav">Nav</NavLink>
            <NavLink to="/slider">Slider</NavLink>
            <NavLink to="/text">Text</NavLink>
          </header>
        </div>
        <div className="App-container">
        <Switch>
          <Redirect from="/" exact to="/home"></Redirect>
          <Route path="/home" component={Home} ></Route>
          <Route path="/button" component={Button} ></Route>
          <Route path="/container" component={Container} ></Route>
          <Route path="/image"  component={Image} ></Route>
          <Route path="/list"  component={List} ></Route>
          <Route path="/nav"  component={Nav} ></Route>
          <Route path="/slider"  component={Slider} ></Route>
          <Route path="/text" component={Text} ></Route>
        </Switch>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;