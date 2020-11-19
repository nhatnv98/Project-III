import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import admin from './components/admin/admin';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import ListStudents from './components/student/ListStudents';
import PageTeacher from './components/teacher/PageTeacher';

export default function App() {
  return (
    <>
    
    <div >
      <BrowserRouter>
        <HomePage/>
        <div>
         
          <Switch>
            <Route path="/teacher" component={PageTeacher} />
            <Route path="/home" component={Dashboard} />
            <Route path="/student" component={ListStudents} />
            <Route path="/" component={ListStudents} />
            <Route path="/admin" component={admin} />
            <Route path="/login" component={Login} />
            {/* <Route path='/' /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
    </>
  );
}

  