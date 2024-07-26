import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import DocsImage from '../../../../src/assets/images/Docs.png' // Adjust path as necessary

const GoogleBooks = () => {
  const [docsUrl, setDocsUrl] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDocsUrl(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedUrl(docsUrl);   
  };

  return (
    <Box
      sx={{
        p: 4,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 800,
        width: '100%',
        border: '1px solid #ddd',
        height: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <img src={DocsImage} alt="Docs" style={{ maxWidth: '100%', height: 'auto' }} />
        <Typography variant="h4" color="textPrimary" mt={0} ml={2}>
          Google Docs Viewer
        </Typography>
      </Box>
      <TextField
        label="Enter Google Docs Link"
        variant="outlined"
        fullWidth
        value={docsUrl}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{ mb: 3, bgcolor: '#4285F4', '&:hover': { bgcolor: '#357ae8' } }} // Google Docs blue color
      >
        Show Document
      </Button>
      {submittedUrl && (
        <Box
          sx={{
            width: '100%',
            height: '80vh',
            borderRadius: 1,
            overflow: 'hidden',
            boxShadow: 2,
            padding: '10px',
            '& iframe': {
              width: '100%',
              height: '100%',
              border: 'none',
            },
          }}
        >
          <iframe
            src={submittedUrl}
            title="Google Docs"
          />
        </Box>
      )}
    </Box>
  );
};

export default GoogleBooks;
