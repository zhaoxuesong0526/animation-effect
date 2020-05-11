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
import Icon from "./page/icon"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-header"> 
          <div className="logo"><img src='https://nwzimg.clouddream.net/picture/Rr5ri-lRMkmO6yp2AnWuVw/W4ktuFRpyUKV52yoWVXVig.png' alt="logo"/></div>
          <header className="header">
            <NavLink to="/hover-effect/home">Home</NavLink>
            <NavLink to="/hover-effect/button">Button</NavLink>
            <NavLink to="/hover-effect/container">Container</NavLink>
            <NavLink to="/hover-effect/image">Image</NavLink>
            <NavLink to="/hover-effect/list">List</NavLink>
            <NavLink to="/hover-effect/nav">Nav</NavLink>
            <NavLink to="/hover-effect/slider">Slider</NavLink>
            <NavLink to="/hover-effect/text">Text</NavLink>
            <NavLink to="/hover-effect/icon">Icon</NavLink>
          </header>
        </div>
        <div className="App-container">
        <Switch>
          <Redirect from="/hover-effect" exact to="/hover-effect/home"></Redirect>
          <Route path="/hover-effect/home" component={Home} ></Route>
          <Route path="/hover-effect/button" component={Button} ></Route>
          <Route path="/hover-effect/container" component={Container} ></Route>
          <Route path="/hover-effect/image"  component={Image} ></Route>
          <Route path="/hover-effect/list"  component={List} ></Route>
          <Route path="/hover-effect/nav"  component={Nav} ></Route>
          <Route path="/hover-effect/slider"  component={Slider} ></Route>
          <Route path="/hover-effect/text" component={Text} ></Route>
          <Route path="/hover-effect/icon" component={Icon} ></Route>
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;