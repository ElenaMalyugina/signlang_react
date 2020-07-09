import React from 'react';
import './App.css';
import LoginForm from './login/login.component';
import ErrorBoundary from './common/errorBoundary';

function App() {
  return (
    <div className="container t-container">
      <ErrorBoundary>
        <LoginForm/>
      </ErrorBoundary>      
    </div>
  );
}

export default App;
