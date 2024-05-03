import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');

const fetchJobs = createAsyncThunk(
    'FETCH_JOBS',
    async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 10,
            "offset": 0
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        const { data } = await axios("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);

        return data;
    }
);

export { increment, decrement, fetchJobs };
