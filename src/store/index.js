import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-named-as-default-member
import jobsReducer from '../reducer/jobs-reducers';

const index = configureStore({
	reducer: jobsReducer,
});

export default index;
