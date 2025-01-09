import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginSite from './ReactProject/LoginSite';
import TodoSite from './ReactProject/TodoList/TodoSite';
import Calculator from './ReactProject/Calculator/Calculator';
import Nav from './ReactProject/Nav';
import XOGame from './ReactProject/XO-Game/XOGame';

function App() {
    return (
      <>
      <Routes>
        <Route path='/' element = {<LoginSite/>}/>
        <Route path='/nav' element = {<Nav/>}/>
        <Route path='/todosite' element = {<TodoSite/>}/>
        <Route path='/xogame' element = {<XOGame/>}/>
        <Route path='/calculator' element = {<Calculator/>}/>

      </Routes>
      </>
    );
};

export default App;
