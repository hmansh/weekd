import { createSelector } from '@reduxjs/toolkit';

const getState = (state) => state;

export const getJobs = createSelector(getState, (state) => state.jobs ?? []);

export const getCompanyOptions = createSelector(getJobs, (jobs) => {
  return jobs.map(({ jdUid, companyName }) => ({ value: jdUid, label: companyName }));
});

export const getMinimumExperienceOptions = createSelector(getJobs, (jobs) => {
  return jobs.map(({ jdUid, minExp }) => ({ value: jdUid, label: minExp }));
});

export const getLocationOptions = createSelector(getJobs, (jobs) => {
  return jobs.map(({ jdUid, location }) => ({ value: jdUid, label: location }));
});

export const getRemoteOptions = createSelector(getJobs, (jobs) => {
  return [
    { value: 'remote', label: 'Remote' },
    { value: 'on-site', label: 'Onsite' },
  ];
});

export const getTechStackOptions = createSelector(getJobs, (jobs) => {
  return [];
});

export const getRoleOptions = createSelector(getJobs, (jobs) => {
  return jobs.map(({ jdUid, jobRole }) => ({ value: jdUid, label: jobRole }));
});

export const getMinimumPayOptions = createSelector(getJobs, (jobs) => {
  return jobs.map(({ jdUid, minJdSalary }) => ({ value: jdUid, label: minJdSalary }));
});
