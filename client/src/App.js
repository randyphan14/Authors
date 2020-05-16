import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Update from './views/Update'
import NewAuthor from './views/NewAuthor'
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <NewAuthor path = "/new"/>
        <Update path="/:id/edit"/>
      </Router>
    </div>
  );
}
export default App;