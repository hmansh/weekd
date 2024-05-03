import React, { useState } from 'react';
import { Typography, CardContent, Grid, Stack, Chip } from '@mui/material';
import Box from '@mui/material/Box';
import BoltIcon from '@mui/icons-material/Bolt';
import { openLinkInNewTab } from '../../../helpers/utils';
import {
	StyledCard,
	StyledDescription,
	StyledPrimaryButton,
	StyledSecondaryButton,
} from './job-card';

function JobCard({ job }) {
	const {
		jdUid,
		jdLink,
		minExp,
		logoUrl,
		jobRole,
		location,
		companyName,
		maxJdSalary,
		minJdSalary,
		jobDetailsFromCompany,
	} = job;

	const [saved, setSaved] = useState(false);

	const CardHeader = (
		<Grid container>
			<Grid item xs={3}>
				<img src={logoUrl} alt="company-logo" style={{ height: 80, width: 80 }} />
			</Grid>
			<Grid item xs={6}>
				<Typography variant="h5" gutterBottom>
					{companyName}
				</Typography>
				<Typography variant="h8" color="textPrimary">
					{jobRole.toUpperCase()}
				</Typography>
				<Typography variant="body2" color="textSecondary">
					{location.toUpperCase()}
				</Typography>
			</Grid>
		</Grid>
	);

	const MinimumExperience = minExp && (
		<Typography variant="body2" gutterBottom>
			<b>Minimum Experience: </b>
			{minExp} years
		</Typography>
	);

	return (
		<StyledCard key={jdUid} elevation={1} sx={{ maxWidth: 700 }}>
			<CardContent>
				<Chip variant="primary" sx={{ mb: 2 }} icon={<BoltIcon />} label="Posted: 6 days ago" />
				{CardHeader}
				<Typography variant="body2" gutterBottom>
					Estimated Salary: {minJdSalary} - {maxJdSalary} LPA
				</Typography>
				<Box maxHeight={200} overflow="hidden" position="relative">
					<Typography variant="body1" gutterBottom>
						<b>About Company: </b>
					</Typography>
					<StyledDescription gutterBottom variant="body2">
						{jobDetailsFromCompany}
					</StyledDescription>
				</Box>
				{MinimumExperience}
				<Stack direction="column" spacing={1}>
					<StyledPrimaryButton fullWidth disableElevation onClick={() => openLinkInNewTab(jdLink)}>
						Apply
					</StyledPrimaryButton>
					<StyledSecondaryButton
						fullWidth
						disableElevation
						onClick={() => setSaved((prev) => !prev)}
					>
						{saved ? 'Saved' : 'Save'}
					</StyledSecondaryButton>
				</Stack>
			</CardContent>
		</StyledCard>
	);
}

export default JobCard;
