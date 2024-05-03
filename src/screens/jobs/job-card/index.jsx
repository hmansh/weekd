import React from 'react';
import {Typography, Box, Card, CardContent, Grid, Button, Stack} from '@mui/material';

const JobCard = () => {
    return (
        <Card elevation={1} sx={{ maxWidth: 700 }}>
            <CardContent>
                <Grid container>
                    <Grid item xs={6}>
                        <Grid item>
                            <img src="https://via.placeholder.com/100" alt="company logo" />
                        </Grid>
                        <Typography variant="body2" color="textSecondary">
                            Ema - Bangalore
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Posted: 6 days ago
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" gutterBottom>
                            Estimated Salary: 30-50 LPA
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Typography variant="body2" color="textSecondary">
                                [Easy Apply]
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                [Unlock referral asks]
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant="body1" gutterBottom>
                    <b>About Company:</b>
                </Typography>
                <Typography variant="body2">
                    Ema is building the next generation AI technology to empower every
                    employee in the enterprise to be their most creative and productive. Our
                    proprietary tech allows enterprises to delegate most repetitive tasks
                    to Ema, the AI employee. We are founded by ex-Google, Coinbase,
                    Okta executives and serial entrepreneurs. We've raised capital from
                    notable investors such as Accel Partners, Naspers, Section32 and a
                    host of prominent Silicon Valley names.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <b>Minimum Experience</b>
                </Typography>
                <Typography variant="body2">8 years</Typography>
                <Stack direction="column" spacing={1}>
                    <Button disableElevation fullWidth variant="contained" color="primary">
                        Apply
                    </Button>
                    <Button disableElevation fullWidth variant="contained" color="secondary">
                        Save
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default JobCard;
