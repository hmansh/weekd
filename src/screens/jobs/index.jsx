import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import {Grid} from "@mui/material";
import JobCard from "./job-card";
import {decrement, fetchJobs, increment} from "../../action";
import { connect } from 'react-redux';

const JobsList = (props) => {
    const fetchJobsList = async () => {
        await props.handleFetchJobs();
    }

    useEffect(() => {
        fetchJobsList();
    }, []);

    const JobCards = props.jobs.map((job) => (
        <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
            <Box component="div" sx={{ p: 2, border: '1px dashed grey' }}>
                <JobCard job={job} />
            </Box>
        </Grid>
    ));

    return (
        <Box component="section" height={'100%'} sx={{ p: 2, border: '1px dashed grey' }}>
            <Grid container spacing={2}>
                {JobCards}
            </Grid>
        </Box>
    );
}

const mapStateToProps = (state) => ({
    jobs: state.jobs,
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment),
    decrement: () => dispatch(decrement),
    handleFetchJobs: () => dispatch(fetchJobs()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(JobsList);
