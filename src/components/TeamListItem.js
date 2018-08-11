import React, { Component } from 'react';
import OpponentListItem from './OpponentListItem'

export default class TeamListItem extends Component {

	constructor(props) {
		super(props);
		this.state = {teamDefensiveRank: -1};
	}

	componentDidUpdate(prevProps){
		if(prevProps.defenseRankings !== this.props.defenseRankings){
			const teamDefensiveRank = this.props.defenseRankings.findIndex(rank => {
				return(rank.team === this.props.team.name && rank.index > -1)
			});
			this.setState({teamDefensiveRank});
		}
	}

	render() {
		return (
			<div style = {styles.title}>
				{this.props.team.name} (Defensive rank: {this.state.teamDefensiveRank > 0 ? this.state.teamDefensiveRank + 1 : 'n/a' });
				<div style = {styles.container}>
					{this.props.team.schedule.map((opponent, index) => <OpponentListItem key={index} opponent={opponent} offenseRankings = {this.props.offenseRankings} defenseRank = {this.state.teamDefensiveRank}/>)}
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

}

