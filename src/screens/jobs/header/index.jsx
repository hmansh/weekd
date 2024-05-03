import React from 'react';
import {TextField, Autocomplete, FormControl, InputLabel, Select, MenuItem, Card} from '@mui/material';

const Headers = () => {
    const roles = ['Software Engineer', 'Product Manager', 'Data Scientist', 'DevOps Engineer'];
    const experience = ['Fresher', '1-3 years', '3-5 years', '5+ years'];
    const remote = ['Yes', 'No'];
    const minBaseSalary = [100000, 150000, 200000, 250000];

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    };

    const randomRole = () => {
        return roles[getRandomInt(roles.length)];
    };

    const randomExperience = () => {
        return experience[getRandomInt(experience.length)];
    };

    const randomRemote = () => {
        return remote[getRandomInt(remote.length)];
    };

    const randomSalary = () => {
        return minBaseSalary[getRandomInt(minBaseSalary.length)];
    };

    return (
        <Card sx={{padding: 1}} elevation={0}>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Roles</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={randomRole()}
                    label="Roles"
                    onChange={(event) => {
                        // handle role change
                    }}
                >
                    {roles.map((role) => (
                        <MenuItem key={role} value={role}>
                            {role}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Experience</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={randomExperience()}
                    label="Experience"
                    onChange={(event) => {
                        // handle experience change
                    }}
                >
                    {experience.map((exp) => (
                        <MenuItem key={exp} value={exp}>
                            {exp}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Remote</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={randomRemote()}
                    label="Remote"
                    onChange={(event) => {
                        // handle remote change
                    }}
                >
                    {remote.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <TextField
                    id="outlined-basic"
                    label="Minimum Base Salary"
                    variant="outlined"
                    value={randomSalary()}
                    onChange={(event) => {
                        // handle min salary change
                    }}
                />
            </FormControl>
            <FormControl>
                <Autocomplete
                    freeSolo
                    id="company-search"
                    disableClearable
                    options={[]}
                    renderInput={(params) => <TextField {...params} label="Search Company Name" />}
                    onChange={(event, newValue) => {
                        // handle company search change
                    }}
                />
            </FormControl>
        </Card>
    );
};

export default Headers;
