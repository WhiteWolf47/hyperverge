import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import SlidesImage from '../../../../src/assets/images/Slides.png'

const GoogleSlides = () => {
  const [spreadsheetUrl, setSpreadsheetUrl] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpreadsheetUrl(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedUrl(spreadsheetUrl);
  };

  const handleRedirect = () => {
    if (submittedUrl) {
      window.open(submittedUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Box
      sx={{
        p: 3,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: 800,
        border: '1px solid #ddd',
        transition: 'box-shadow 0.3s ease',
        height: '100%',
        '&:hover': {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
        }}
      >
         <img src={SlidesImage} alt="Google Slides Icon" style={{ maxWidth: '100%', height: 'auto' }}  />
        <Typography variant="h4" color="common.white" mt="20">
          Google Slides Viewer
        </Typography>
      </Box>
      <TextField
        label="Enter Google Slides Embed Link"
        variant="outlined"
        fullWidth
        value={spreadsheetUrl}
        onChange={handleInputChange}
        sx={{ mb: 2 , mt:5}}
      />
       <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{ mb: 2, bgcolor: '#FFC309  ', '&:hover': { bgcolor: '#FFC309' } }}
      >
        Show Slide
      </Button>
      {submittedUrl && (
        <Box
          sx={{
            width: '100%',
            height: '400px',
            borderRadius: 1,
            overflow: 'hidden',
            boxShadow: 1,
            border: '1px solid #ddd',
            '& iframe': {
              width: '100%',
              height: '100%',
              border: 'none',
            },
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
          onClick={handleRedirect}
        >
          <a href={submittedUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
          <iframe
            src={submittedUrl}
            title="Google Slide"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </a>
        </Box>
      )}
    </Box>
  );
};

export default GoogleSlides;
