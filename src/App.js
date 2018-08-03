import React, { Component } from 'react';
import './App.css';
import TeamList from './components/TeamList';
import RankingsInput from './components/RankingsInput';
import {parseRankings} from './utils'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {offenseRankings: [], defenseRankings: []};
  }

  handleChange = (event) => {
    const rankings = parseRankings(event.target.value);
    this.setState({[event.target.className]: rankings});
  }

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <RankingsInput rankingsType = "offenseRankings" handleChange={this.handleChange} handleSubmit = {this.handleSubmit} value = {this.state.value}/>
        <RankingsInput rankingsType = "defenseRankings" handleChange={this.handleChange} handleSubmit = {this.handleSubmit} value = {this.state.value}/>
        <TeamList offenseRankings={this.state.offenseRankings} defenseRankings = {this.state.defenseRankings}/>
      </div>
    );
  }
}

export default App;
