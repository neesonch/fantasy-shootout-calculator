import React, { Component } from 'react';
import {invertRanking} from '../utils'

export default class TeamListItem extends Component {

	constructor(props) {
		super(props);
		this.state = {garbageScore: -1}
	}

	componentDidUpdate(prevProps){
		if(this.props.offenseRankings !== prevProps.offenseRankings || this.props.defenseRank !== prevProps.defenseRank){
			const offRank = this.props.offenseRankings.findIndex(rank => rank.team === this.props.opponent);
			this.setState({garbageScore: this.calculateGarbageScore(offRank, this.props.defenseRank)});
		}
	}

	calculateGarbageScore = (offRanking, defRanking) => defRanking + invertRanking(offRanking, 32);

	calculateDisplayColor = (score, range) =>{ 
		if (score < 0) return 'black';
		const lowerTier =  Math.floor(range/3);
		const upperTier = range - lowerTier;
		const displayColor = score > upperTier ? 'green' : score < lowerTier ? 'red' : 'black';
		return displayColor;
	}

	render() {
		const props = this.props;
		const garbageScoreStyles = {
			color: this.calculateDisplayColor(this.state.garbageScore, 64),
			fontWeight: 'bold'
		}
		
		// Declaring styles here instead of outside class to use dynamic property
		const styles = {
			opponentItem: {
				margin: '2px',
				padding: '2px',
				borderLeft: '1px solid black',
				flexBasis: '0',
				flexGrow: '1',
				...garbageScoreStyles,
			},
		}

		return (
			<div style={styles.opponentItem}> {props.opponent}</div>
		);
	}	

}
