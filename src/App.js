import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tick from './components/Tick'
import Courses from './components/jobs/AllCourses'
import MainUI from './MainUI'
class App extends Component {
  render() {
    return (
     <div>
         <MainUI/>
         <div>
             <Courses/>
         </div>
     </div>
    );
  }
}

export default App;
