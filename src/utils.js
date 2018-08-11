import {teams} from './team-data';

export const parseRankings = (input) => {
	let indexedTeams = [];
	teams.forEach(team => {
		indexedTeams.push(findIndexOfTeam(team, input));
	});
	const sortedTeams = indexedTeams.splice(0).sort((t1, t2) => t1.index - t2.index);
	return sortedTeams;
}

const findIndexOfTeam = (team, string) => {
	const index = string.indexOf(team);
	return({team, index});
}

export const invertRanking = (rank, range) => (range - rank) + 1;