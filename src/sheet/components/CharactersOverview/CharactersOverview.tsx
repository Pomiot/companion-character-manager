import React, { Component, ReactNode } from 'react';
import GridLayout from 'react-grid-layout';
import styles from './CharactersOverview.module.css';
import { CharacterElementGroup } from '../../Character';
import { CharacterProvider } from '../../services/CharacterProvider';

export interface Props {
  characterService: CharacterProvider;
}

interface State {
  layout: CharacterElementGroup[];
}

export class CharactersOverview extends Component<Props, State> {
  state: State = {
    layout: []
  };

  componentDidMount(): void {
    let char = this.props.characterService.retrieveCharacter();
    this.setState({ layout: char });
  }

  render() {
    return (
      <div className='container'>
        <GridLayout className="layout" layout={this.state.layout} cols={12} rowHeight={30} width={1200}>
          {this.state.layout.map((characterBit, index) => (
            <div className={styles.gridElement} key={characterBit.i}></div>
          ))}
        </GridLayout>
      </div>
    )
  }
}