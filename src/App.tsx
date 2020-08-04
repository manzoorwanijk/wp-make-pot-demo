import React from 'react';
import { __, sprintf } from '@wordpress/i18n';
import Header from "./Header";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <p>
          {sprintf( __('Edit %s and save to reload.'), 'src/App.tsx' )}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {__('Learn React')}
        </a>
      </header>
    </div>
  );
}

export default App;
