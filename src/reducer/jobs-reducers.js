const initialState = {
    jobs: [],
};

const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_JOBS/fulfilled':
            return {
                ...state,
                jobs: action.payload?.jdList ?? [],
            };
        default:
            return state;
    }
};

export default jobsReducer;

