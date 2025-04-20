import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  InputAdornment,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimelineIcon from '@mui/icons-material/Timeline';

const JobInputForm = () => {
  const [experience, setExperience] = useState('');
 const [jobTittle, setJobTittle] = useState('');
 const [location, setLocation] = useState('') 
  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        p: 2,
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 4, mt: 3, color: '#333' }}
      >
        Find Jobs🎯  
      </Typography>

      <Card sx={{ width: 400, p: 3, boxShadow: 5, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center">
            🔍 Job Preferences
          </Typography>

          <TextField
            fullWidth
            label="Job Title"
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <WorkIcon />
                </InputAdornment>
              ),
            }}
            value={jobTittle}
            onChange={(e)=>setJobTittle(e.target.value)}
          />

          <FormControl fullWidth margin="normal">
            <InputLabel id="experience-label">Years of Experience</InputLabel>
            <Select
              labelId="experience-label"
              value={experience}
              label="Years of Experience"
              onChange={handleExperienceChange}
              startAdornment={
                <InputAdornment position="start">
                  <TimelineIcon />
                </InputAdornment>
              }
            >
              <MenuItem value="0-1">0 - 1 year</MenuItem>
              <MenuItem value="1-2">1 - 2 years</MenuItem>
              <MenuItem value="2-4">2 - 4 years</MenuItem>
              <MenuItem value="4-6">4 - 6 years</MenuItem>
              <MenuItem value="6+">6+ years</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Location"
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, py: 1.5, borderRadius: 2 }}
          >
            Search Jobs
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default JobInputForm;
