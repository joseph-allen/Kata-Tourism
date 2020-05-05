import React from 'react';
import './App.css';
import { Loader, Segment, Button } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Segment>
          <Loader active inline='centered' />
        </Segment>
        <Button>Example Semantic UI</Button>
      </header>
    </div >
  );
}

export default App;
