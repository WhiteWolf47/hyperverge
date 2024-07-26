import React, { useState } from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Meet = () => {
  const theme = useTheme();
  const [meetUrl, setMeetUrl] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMeetUrl(event.target.value);
  };

  const handleJoinMeet = () => {
    if (meetUrl) {
      window.open(meetUrl, '_blank'); // Opens the URL in a new tab
    }
  };

  return (
    <Paper
      sx={{
        bgcolor: theme.palette.background.paper,
        borderRadius: '10px',
        p: { xs: 3, sm: 5 },
        mx: 'auto', // Center horizontally
        mt: 2,
        mb: 2,
        width: '100%',
        maxWidth: 900, 
        maxHeight: 600,
        position: 'relative',
        overflow: 'hidden',
        border: '2px solid #800080'
        
      }}
    >
      <Typography variant="h4" color={theme.palette.text.primary} mb={3}>
        Google Meet
      </Typography>
      <TextField
        label="Enter Google Meet URL"
        variant="outlined"
        fullWidth
        value={meetUrl}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        onClick={handleJoinMeet}
        disabled={!meetUrl}
        sx={{
          backgroundColor: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          }
        }}
      >
        Join Meet
      </Button>
    </Paper>
  );
};

export default Meet;
