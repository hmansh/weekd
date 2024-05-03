import { createSelector } from '@reduxjs/toolkit';
import queryString from 'query-string';
import { capitalize, convertSpaceToDash } from '../helpers/utils';

const getState = (state) => state;
const getProps = (state, props) => props;

export const getQueryParams = createSelector(getProps, (props) => {
	return queryString.parse(props.location ? props.location.search : '');
});

export const getFilteredQueryParams = createSelector(getQueryParams, (queryParams) => {
	const filterParams = {};

	Object.keys(queryParams).forEach((key) => {
		if (key === 'experience') filterParams.experience = parseInt(queryParams.experience, 10);
		if (key === 'location') filterParams.location = queryParams.location;
		if (key === 'isRemote') filterParams.isRemote = queryParams.isRemote === 'remote';
		if (key === 'techStack') filterParams.techStack = queryParams.techStack;
		if (key === 'role') filterParams.role = queryParams.role;
		if (key === 'search') filterParams.search = queryParams.search;
		if (key === 'minSalary') filterParams.minSalary = queryParams.minSalary;
	});

	return filterParams;
});

export const getAllJobs = createSelector(getState, (state) => state.jobs || []);

export const getFilteredJobs = createSelector(
	getAllJobs,
	getFilteredQueryParams,
	(jobs, queryParams) => {
		const { experience, location, isRemote, techStack, role } = queryParams;

		return jobs.filter((job) => {
			if (experience && job.minExp !== experience) return false;
			if (location && job.location !== location) return false;
			if (isRemote && job.isRemote !== isRemote) return false;
			if (techStack && job.techStack !== techStack) return false;
			if (role && job.role !== role) return false;

			return true;
		});
	},
);

export const getCompanyOptions = createSelector(getAllJobs, (jobs) => {
	return jobs.map(({ jdUid, companyName }) => ({ value: jdUid, label: companyName }));
});

export const getMinimumExperienceOptions = createSelector(getAllJobs, (jobs) => {
	const filterOptions = {};
	jobs.forEach(({ minExp }) => {
		if (typeof minExp !== 'number') return;

		filterOptions[minExp] = minExp;
	});
	return Object.keys(filterOptions).map((key) => ({
		value: key.toString(),
		label: filterOptions[key],
	}));
});

export const getLocationOptions = createSelector(getAllJobs, (jobs) => {
	const filterOptions = {};
	jobs.forEach(({ location }) => {
		if (typeof location !== 'string') return;

		filterOptions[convertSpaceToDash(location)] = location;
	});
	return Object.keys(filterOptions).map((key) => ({
		value: key.toString(),
		label: capitalize(filterOptions[key]),
	}));
});

export const getRemoteOptions = createSelector(getAllJobs, () => {
	return [
		{ value: 'remote', label: 'Remote' },
		{ value: 'on-site', label: 'Onsite' },
	];
});

export const getTechStackOptions = createSelector(getAllJobs, () => {
	return [];
});

export const getRoleOptions = createSelector(getAllJobs, (jobs) => {
	const filterOptions = {};
	jobs.forEach(({ jobRole }) => {
		if (typeof jobRole !== 'string') return;

		filterOptions[convertSpaceToDash(jobRole)] = jobRole;
	});
	return Object.keys(filterOptions).map((key) => ({
		value: key.toString(),
		label: capitalize(filterOptions[key]),
	}));
});

export const getMinimumPayOptions = createSelector(getAllJobs, (jobs) => {
	return jobs.map(({ jdUid, minJdSalary }) => ({ value: jdUid, label: minJdSalary }));
});
