import React from 'react';
import './App.css';

import { HashRouter} from 'react-router-dom';
import routes from './routes';
import Header from './components/Header';




function App() {
  return (
    <HashRouter >
      <div className="App">
        <Header />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
