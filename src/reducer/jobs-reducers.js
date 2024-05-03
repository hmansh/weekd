const initialState = {
	jobs: [],
};

// eslint-disable-next-line default-param-last
const jobsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_JOBS/fulfilled':
			return {
				...state,
				jobs: [...state.jobs, ...(action.payload.jdList || [])],
			};
		default:
			return state;
	}
};

export default jobsReducer;
