import React, { Component } from 'react';
import { CharactersOverview } from './sheet/components/CharactersOverview/CharactersOverview'
import './App.css';
import { LocalCharacterProvider } from './sheet/services/LocalCharacterProvider';

const characterProvider = new LocalCharacterProvider();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CharactersOverview characterService={characterProvider} />
        </header>
      </div>
    );
  }
}

export default App;
