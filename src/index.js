import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import DashBoard from './components/DashBoard';
import Header from './components/Header';
import Lyrics from './components/Lyrics';

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <div className="container">
        <Route path="/lyrics-finder" exact component={DashBoard} />
        <Route path="/lyrics/:id" exact component={Lyrics} />
      </div>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#root'));
