import React, { Component } from 'react';


export default class RankingsInput extends Component {

	constructor(props) {
		super(props);

		const label = this.props.rankingsType === "offenseRankings" ? "Offense" : "Defense";
		this.state = {label};
	}

	render() {
		return (
		  <form onSubmit={this.props.handleSubmit}>
		    <label>
		      {this.state.label} rankings:<br/>
		      <textarea className={this.props.rankingsType} rows="4" cols="50" value={this.props.value} onChange={this.props.handleChange}>

		      </textarea>
		    </label>
		    <input type="submit" value="Submit" />
		  </form>
		);	
	}	
}