import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/Form';
import Header from './components/Header';
import TImeSlotList from './components/TImeSlotList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/form/:date/:slot'>
            <Header />
            <Form />
          </Route>
          <Route path='/'>
            <Header />
            <TImeSlotList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
