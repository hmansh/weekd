import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');

const fetchJobs = createAsyncThunk('FETCH_JOBS', async ({ pageCount }) => {
	const headers = {
		'Content-Type': 'application/json',
	};

	const body = {
		limit: 10,
		offset: pageCount * 10,
	};

	const { data } = await axios.post(
		'https://api.weekday.technology/adhoc/getSampleJdJSON',
		body,
		headers,
	);

	return data;
});

export { increment, decrement, fetchJobs };
