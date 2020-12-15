import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/Form';
import Header from './components/Header';
import TimeSlotList from './components/TimeSlotList';

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
            <TimeSlotList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
