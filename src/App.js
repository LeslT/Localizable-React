import React from 'react';
import './App.css';
import i18n from './i18n';
import VistaReact from './vistaReact.js';
import { withNamespaces } from 'react-i18next';

function App({t}) {
  return (
    <div className="App">
     <VistaReact language={t}></VistaReact>
    </div>
  );
}

export default withNamespaces()(App);
