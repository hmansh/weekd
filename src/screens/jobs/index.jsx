import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import JobCard from './job-card';
import { decrement, fetchJobs, increment } from '../../action';
import { getJobs } from '../../selector/jobs';

function JobsList(props) {
	const [pageCount, setPageCount] = useState(0);

	const fetchJobsList = async () => {
		await props.handleFetchJobs({ pageCount }).then(() => setPageCount((prev) => prev + 1));
	};

	useEffect(() => {
		fetchJobsList();
	}, []);

	const JobCards = props.jobs.map((job) => (
		<Grid key={job.jdUid} item xs={12} sm={8} md={6} lg={4} xl={3}>
			<Box component="div">
				<JobCard job={job} />
			</Box>
		</Grid>
	));

	return (
		<Box component="section" height="100%">
			<InfiniteScroll
				dataLength={props.jobs.length}
				next={fetchJobsList}
				hasMore
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				<Grid container spacing={2}>
					{JobCards}
				</Grid>
			</InfiniteScroll>
		</Box>
	);
}

const mapStateToProps = (state) => ({
	jobs: getJobs(state),
});

const mapDispatchToProps = (dispatch) => ({
	increment: () => dispatch(increment),
	decrement: () => dispatch(decrement),
	handleFetchJobs: (body) => dispatch(fetchJobs(body)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(JobsList);
