import React from 'react';
import './App.scss';
import LoginForm from './login/login.component';
import ErrorBoundary from './helpers/errorBoundary';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container t-container">
      <ErrorBoundary>
        <BrowserRouter>
          <Route exact path='/' component={LoginForm}/>          
        </BrowserRouter>
      </ErrorBoundary>      
    </div>
  );
}

export default App;
