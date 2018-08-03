import React, { Component } from 'react';
import {teamsByName} from '../team-data.js';
import TeamListItem from './TeamListItem.js';


export default class TeamList extends Component {

	render() {
		return (
			teamsByName.map(team => <TeamListItem key={team.name} team={team} offenseRankings = {this.props.offenseRankings} defenseRankings = {this.props.defenseRankings}/>)
		);
	}
}