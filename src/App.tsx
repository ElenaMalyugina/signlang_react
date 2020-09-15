import React from 'react';
import './App.scss';
import LoginForm from './login/login.component';
import ErrorBoundary from './helpers/errorBoundary';
import { BrowserRouter, Route } from 'react-router-dom';
import RegistrationForm from './registration/registration.component';
import BooksList from './booksList/booksList';

function App() {
  return (
    <div className="container t-container">
      <ErrorBoundary>
        <BrowserRouter>
          <Route exact path='/' component={LoginForm}/>     
          <Route path='/registration' component={RegistrationForm} />  
          <Route path='/books' component={BooksList} />   
        </BrowserRouter>
      </ErrorBoundary>      
    </div>
  );
}

export default App;
