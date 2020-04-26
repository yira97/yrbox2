import React from 'react';
import { HashRouter } from 'react-router-dom';
import { RootProvider } from './contexts'
import { BasicLayout } from './layouts/BasicLayout'
import './App.css';


function App() {
  return (
    <div className="App">
      <RootProvider >
        <HashRouter>
          <BasicLayout />
        </HashRouter>
      </RootProvider>
    </div>
  );
}

export default App;
