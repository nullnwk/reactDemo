import React from 'react';
import Router from './router/router';
import List from './components/global/appHeader';

function App() {
  return (
    <div className="App">
      <List></List>
      <Router />
    </div>
  );
}

export default App;
