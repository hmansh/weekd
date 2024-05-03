import React, { useState } from 'react';
import { Typography, Card, CardContent, Grid, Button, Stack } from '@mui/material';
import { capitalize, openLinkInNewTab } from '../../../helpers/utils';

function JobCard({ job }) {
	const [saved, setSaved] = useState(false);
	const {
		jdUid,
		jdLink,
		jobDetailsFromCompany,
		maxJdSalary,
		minJdSalary,
		location,
		minExp,
		jobRole,
		companyName,
		logoUrl,
	} = job;

	return (
		<Card key={jdUid} elevation={1} sx={{ maxWidth: 700 }}>
			<CardContent>
				<Grid container>
					<Grid item xs={4}>
						<Grid item>
							<img
								style={{ height: 80, width: 80, borderRadius: 8 }}
								src={logoUrl}
								alt="company logo"
							/>
						</Grid>
						<Typography variant="body2" color="textSecondary">
							Posted: 6 days ago
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography variant="body2" gutterBottom>
							{companyName}
						</Typography>
						<Typography variant="body2" color="textSecondary">
							{capitalize(jobRole)}
						</Typography>
						<Typography variant="body2" color="textSecondary">
							{capitalize(location)}
						</Typography>
					</Grid>
				</Grid>
				<Typography variant="body2" gutterBottom>
					Estimated Salary: {minJdSalary} - {maxJdSalary} LPA
				</Typography>
				<Typography variant="body1" gutterBottom>
					<b>About Company:</b>
				</Typography>
				<Typography variant="body2">{jobDetailsFromCompany}</Typography>
				<Typography variant="body1" gutterBottom>
					<b>Minimum Experience</b>
				</Typography>
				<Typography variant="body2">{minExp} years</Typography>
				<Stack direction="column" spacing={1}>
					<Button
						onClick={() => openLinkInNewTab(jdLink)}
						disableElevation
						fullWidth
						variant="contained"
						color="primary"
					>
						Apply
					</Button>
					<Button
						onClick={() => setSaved((prev) => !prev)}
						disableElevation
						fullWidth
						variant="contained"
						color="secondary"
					>
						{saved ? 'Saved' : 'Save'}
					</Button>
				</Stack>
			</CardContent>
		</Card>
	);
}

export default JobCard;
