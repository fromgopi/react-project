import React, { Component } from 'react';
import './App.css';
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
