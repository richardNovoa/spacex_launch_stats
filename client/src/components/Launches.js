import React, { Component, Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
	query LaunchesQuery {
		launches {
			flight_number
			mission_name
			launch_date_local
			launch_success
		}
	}
`;

function DisplayLaunches() {
	const { loading, error, data } = useQuery(LAUNCHES_QUERY);

	if (loading) return <h4>Loading...</h4>;
	if (error) console.log(error);

	return (
		<Fragment>
			{data.launches.map((launch) => (
				<LaunchItem key={launch.flight_number} launch={launch} />
			))}
		</Fragment>
	);
}

export class Launches extends Component {
	render() {
		return (
			<div>
				<Fragment>
					<h1 className='display-4 my-3'>Launches</h1>
					<DisplayLaunches />
				</Fragment>
			</div>
		);
	}
}

export default Launches;
