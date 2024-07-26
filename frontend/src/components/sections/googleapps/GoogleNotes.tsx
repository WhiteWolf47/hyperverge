import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const GoogleNotes = () => {
  const [notesUrl, setNotesUrl] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNotesUrl(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedUrl(notesUrl);
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
        <img
          src='data:image/jpeg;base64,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'
          alt="Google Keep Icon"
          style={{ width: 40, height: 40, marginRight: 8 }}
        />
        <Typography variant="h4" color="textPrimary">
          Google Keep Viewer
        </Typography>
      </Box>
      <TextField
        label="Enter Google Keep URL"
        variant="outlined"
        fullWidth
        value={notesUrl}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{ 
          mb: 2,
          bgcolor: '#F4B400', // Google Keep color
          '&:hover': {
            bgcolor: '#F4B400', // Google Keep color
          }
        }}
      >
        Show Note
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
              title="Google Note"
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
          </a>
        </Box>
      )}
    </Box>
  );
};

export default GoogleNotes;
