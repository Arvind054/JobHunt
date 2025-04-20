import React from 'react';
import { Card, CardContent, Typography, Button, CardActions, Box } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const JobCard = ({ title, description, location, applyLink }) => {
  return (
    <Card sx={{ maxWidth: 300, borderRadius: 3, boxShadow: 3, m: 3, maxHeight:200 }} style={{padding:"0.5rem 2rem"}}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={1}>
          <WorkIcon sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6">{title}</Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description.length > 120 ? description.substring(0, 120) + '...' : description}
        </Typography>

        <Box display="flex" alignItems="center">
          <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
          <Typography variant="body2" color="text.primary">
            {location}
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Button 
          size="small" 
          variant="contained" 
          color="primary" 
          endIcon={<OpenInNewIcon />}
          href={applyLink} 
          target="_blank"
        >
          Apply
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
