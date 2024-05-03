import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../reducer/jobs-reducers";

const index = configureStore({
    reducer: jobsReducer,
});

export default index;
