import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import TermsOfUse from './components/TermsOfUse';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/terms-of-use" component={TermsOfUse} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
