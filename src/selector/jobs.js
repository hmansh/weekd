import { createSelector } from '@reduxjs/toolkit';
import { capitalize, generateSimpleHash } from '../helpers/utils';

const getState = (state) => state;
const getProps = (state, props) => props;

export const getJobs = createSelector(getState, getProps, (state, props) => {
	console.log(props);
	return state.jobs;
});

export const getCompanyOptions = createSelector(getJobs, (jobs) => {
	return jobs.map(({ jdUid, companyName }) => ({ value: jdUid, label: companyName }));
});

export const getMinimumExperienceOptions = createSelector(getJobs, (jobs) => {
	const filterOptions = {};
	jobs.forEach(({ minExp }) => {
		if (typeof minExp !== 'number') return;

		filterOptions[generateSimpleHash(minExp)] = minExp;
	});
	return Object.keys(filterOptions).map((key) => ({
		value: key.toString(),
		label: filterOptions[key],
	}));
});

export const getLocationOptions = createSelector(getJobs, (jobs) => {
	const filterOptions = {};
	jobs.forEach(({ location }) => {
		if (typeof location !== 'string') return;

		filterOptions[generateSimpleHash(location)] = location;
	});
	return Object.keys(filterOptions).map((key) => ({
		value: key.toString(),
		label: capitalize(filterOptions[key]),
	}));
});

export const getRemoteOptions = createSelector(getJobs, () => {
	return [
		{ value: 'remote', label: 'Remote' },
		{ value: 'on-site', label: 'Onsite' },
	];
});

export const getTechStackOptions = createSelector(getJobs, () => {
	return [];
});

export const getRoleOptions = createSelector(getJobs, (jobs) => {
	const filterOptions = {};
	jobs.forEach(({ jobRole }) => {
		if (typeof jobRole !== 'string') return;

		filterOptions[generateSimpleHash(jobRole)] = jobRole;
	});
	return Object.keys(filterOptions).map((key) => ({
		value: key.toString(),
		label: capitalize(filterOptions[key]),
	}));
});

export const getMinimumPayOptions = createSelector(getJobs, (jobs) => {
	return jobs.map(({ jdUid, minJdSalary }) => ({ value: jdUid, label: minJdSalary }));
});
