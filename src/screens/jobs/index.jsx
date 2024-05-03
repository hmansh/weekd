import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import JobCard from './job-card';
import { fetchJobs } from '../../action';
import { getFilteredJobs } from '../../selector/jobs';

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
				hasMore
				next={fetchJobsList}
				loader={<h4>Loading...</h4>}
				dataLength={props.jobs.length}
			>
				<Grid container sx={{ padding: 1 }} spacing={2}>
					{JobCards}
				</Grid>
			</InfiniteScroll>
		</Box>
	);
}

const mapStateToProps = (state, props) => ({
	jobs: getFilteredJobs(state, props),
});

const mapDispatchToProps = (dispatch) => ({
	handleFetchJobs: (body) => dispatch(fetchJobs(body)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(JobsList);
