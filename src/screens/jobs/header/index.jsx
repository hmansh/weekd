import React from 'react';
import {
	TextField,
	Autocomplete,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Card,
} from '@mui/material';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import {
	getCompanyOptions,
	getLocationOptions,
	getMinimumExperienceOptions,
	getMinimumPayOptions,
	getRemoteOptions,
	getRoleOptions,
	getTechStackOptions,
} from '../../../selector/jobs';

function Headers(props) {
	const parsedQueryParams = queryString.parse(props.location.search);

	const handleUpdateFilters = (key, value) => {
		const previousQueryParams = { ...parsedQueryParams };
		delete previousQueryParams[key];

		const stringifyQueryParams = queryString.stringify({
			...previousQueryParams,
			[key]: value,
		});
		props.history.push(`?${stringifyQueryParams}`);
	};

	return (
		<Card
			style={{ marginBottom: 24, columnGap: 8, rowGap: 8, display: 'flex', flexWrap: 'wrap' }}
			sx={{ padding: 1 }}
			elevation={0}
		>
			<FormControl sx={{ minWidth: 180 }}>
				<InputLabel id="minimum-experience">Experience</InputLabel>
				<Select
					label="Experience"
					id="minimum-experience"
					value={parsedQueryParams.experience}
					labelId="minimum-experience"
					onChange={(event) => handleUpdateFilters('experience', event.target.value)}
				>
					{props.minimumExperienceOptions.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<FormControl sx={{ minWidth: 180 }}>
				<InputLabel id="location">Location</InputLabel>
				<Select
					labelId="location"
					id="location"
					value={parsedQueryParams.location}
					label="Location"
					onChange={(event) => handleUpdateFilters('location', event.target.value)}
				>
					{props.locationOptions.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<FormControl sx={{ minWidth: 180 }}>
				<InputLabel id="remote-job">Remote Job</InputLabel>
				<Select
					labelId="remote-job"
					id="remote-job"
					value={parsedQueryParams.isRemote}
					label="Remote Job"
					onChange={(event) => handleUpdateFilters('isRemote', event.target.value)}
				>
					{props.remoteOptions.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<FormControl sx={{ minWidth: 180 }}>
				<InputLabel id="tech-stack">Tech Stack</InputLabel>
				<Select
					labelId="tech-stack"
					id="tech-stack"
					value={parsedQueryParams.techStack}
					label="Tech Stack"
					onChange={(event) => handleUpdateFilters('techStack', event.target.value)}
				>
					{props.roleOptions.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<FormControl sx={{ minWidth: 180 }}>
				<InputLabel id="role">Role</InputLabel>
				<Select
					labelId="role"
					id="role"
					value={parsedQueryParams.role}
					label="Role"
					onChange={(event) => handleUpdateFilters('role', event.target.value)}
				>
					{props.roleOptions.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<FormControl sx={{ minWidth: 180 }}>
				<TextField
					id="outlined-basic"
					label="Minimum Base Salary"
					variant="outlined"
					value={parsedQueryParams.minimumSalary}
					onChange={(event) => handleUpdateFilters('minimumSalary', event.target.value)}
				/>
			</FormControl>

			<FormControl sx={{ minWidth: 180 }}>
				<Autocomplete
					freeSolo
					id="company-search"
					disableClearable
					fullWidth
					options={[]}
					renderInput={(params) => <TextField {...params} label="Search Company Name" />}
					onChange={() => {}}
				/>
			</FormControl>
		</Card>
	);
}

const mapStateToProps = (state) => ({
	roleOptions: getRoleOptions(state),
	remoteOptions: getRemoteOptions(state),
	companyOptions: getCompanyOptions(state),
	locationOptions: getLocationOptions(state),
	techStackOptions: getTechStackOptions(state),
	minimumPayOptions: getMinimumPayOptions(state),
	minimumExperienceOptions: getMinimumExperienceOptions(state),
});

const connector = connect(mapStateToProps);

export default withRouter(connector(Headers));
