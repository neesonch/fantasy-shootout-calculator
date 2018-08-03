import React, { Component } from 'react';

export default class TeamListItem extends Component {

	constructor(props) {
		super(props);	
	}

	componentDidUpdate(prevProps){
		if(prevProps.defenseRankings != this.props.defenseRankings){
			const teamDefensiveRank = this.props.defenseRankings.findIndex(rank => rank.team === this.props.team.name);
			this.setState({teamDefensiveRank});
		}
	}

	render() {
		return (
			<div style = {styles.title}>{this.props.team.name}:
				<div style = {styles.container}>
					{this.props.team.schedule.map((opponent, index) => <div style = {styles.item} key={index}>{opponent}</div>)}
				</div>
			</div>
		);
	}
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'row',
	},
	title: {
		margin: '2px',
		padding: '2px',
	},
	item: {
		margin: '2px',
		padding: '2px',
		borderLeft: '1px solid black',
		flexBasis: '0',
		flexGrow: '1',
	}
}

