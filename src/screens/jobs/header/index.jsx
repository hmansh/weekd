import React, { useState } from 'react';
import { Card, Select, TextField, InputLabel, FormControl } from '@mui/material';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import {
	getRoleOptions,
	getRemoteOptions,
	getCompanyOptions,
	getLocationOptions,
	getTechStackOptions,
	getMinimumPayOptions,
	getMinimumExperienceOptions,
	getFilteredQueryParams,
} from '../../../selector/jobs';
import { StyledSelect, StyledMenuOption } from './header';

function Headers({
	minimumExperienceOptions,
	locationOptions,
	remoteOptions,
	roleOptions,
	filters,
	...props
}) {
	const [selectedFilters, setSelectedFilters] = useState(filters);

	const handleUpdateFilters = (key, value) => {
		const previousQueryParams = { ...selectedFilters };
		delete previousQueryParams[key];

		const stringifyQueryParams = queryString.stringify({
			...previousQueryParams,
			[key]: value,
		});
		setSelectedFilters({ ...previousQueryParams, [key]: value });

		props.history.push({ search: stringifyQueryParams });
	};

	const _renderOption = (option) => (
		<StyledMenuOption key={option.value} value={option.value}>
			{option.label}
		</StyledMenuOption>
	);

	return (
		<Card
			elevation={0}
			sx={{ padding: 1 }}
			style={{ marginBottom: 24, columnGap: 8, rowGap: 8, display: 'flex', flexWrap: 'wrap' }}
		>
			<FormControl sx={{ minWidth: 180 }}>
				<InputLabel id="minimum-experience">Min Experience</InputLabel>
				<Select
					label="Min Experience"
					id="minimum-experience"
					labelId="minimum-experience"
					key={selectedFilters.experience}
					value={selectedFilters.experience}
					onChange={(event) => handleUpdateFilters('experience', event.target.value)}
				>
					{minimumExperienceOptions.map(_renderOption)}
				</Select>
			</FormControl>

			<FormControl sx={{ minWidth: 180 }}>
				<InputLabel id="location">Location</InputLabel>
				<StyledSelect
					id="location"
					label="Location"
					labelId="location"
					key={selectedFilters.location}
					value={selectedFilters.location}
					onChange={(event) => handleUpdateFilters('location', event.target.value)}
				>
					{locationOptions.map(_renderOption)}
				</StyledSelect>
			</FormControl>

			<FormControl sx={{ minWidth: 180 }}>
				<InputLabel id="remote-job">Remote Job</InputLabel>
				<Select
					id="remote-job"
					label="Remote Job"
					labelId="remote-job"
					value={selectedFilters.isRemote}
					onChange={(event) => handleUpdateFilters('isRemote', event.target.value)}
				>
					{remoteOptions.map(_renderOption)}
				</Select>
			</FormControl>

			<FormControl sx={{ minWidth: 180 }}>
				<InputLabel id="tech-stack">Tech Stack</InputLabel>
				<Select
					id="tech-stack"
					label="Tech Stack"
					labelId="tech-stack"
					key={selectedFilters.techStack}
					value={selectedFilters.techStack}
					onChange={(event) => handleUpdateFilters('techStack', event.target.value)}
				>
					{roleOptions.map(_renderOption)}
				</Select>
			</FormControl>

			<FormControl sx={{ minWidth: 180 }}>
				<InputLabel id="role">Role</InputLabel>
				<Select
					id="role"
					label="Role"
					labelId="role"
					key={selectedFilters.role}
					value={selectedFilters.role}
					onChange={(event) => handleUpdateFilters('role', event.target.value)}
				>
					{roleOptions.map(_renderOption)}
				</Select>
			</FormControl>

			<FormControl sx={{ minWidth: 180 }}>
				<InputLabel id="minimum-salary">Min Salary</InputLabel>
				<TextField
					type="number"
					variant="outlined"
					id="minimum-salary"
					labelId="minimum-salary"
					label="Min Salary"
					key={selectedFilters.minSalary}
					value={selectedFilters.minSalary}
					onChange={(event) => handleUpdateFilters('minimumSalary', event.target.value)}
				/>
			</FormControl>

			<FormControl sx={{ minWidth: 300 }}>
				<InputLabel id="company-search">Search</InputLabel>
				<TextField
					type="text"
					label="Search"
					variant="outlined"
					id="company-search"
					labelId="company-search"
					key={selectedFilters.search}
					value={selectedFilters.search}
					onChange={(event) => handleUpdateFilters('search', event.target.value)}
				/>
			</FormControl>
		</Card>
	);
}

const mapStateToProps = (state, props) => ({
	roleOptions: getRoleOptions(state),
	remoteOptions: getRemoteOptions(state),
	companyOptions: getCompanyOptions(state),
	locationOptions: getLocationOptions(state),
	techStackOptions: getTechStackOptions(state),
	filters: getFilteredQueryParams(state, props),
	minimumPayOptions: getMinimumPayOptions(state),
	minimumExperienceOptions: getMinimumExperienceOptions(state),
});

const connector = connect(mapStateToProps);

export default withRouter(connector(Headers));
