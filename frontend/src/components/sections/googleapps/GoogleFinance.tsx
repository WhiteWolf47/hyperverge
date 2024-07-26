import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const GoogleFinance= () => {
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
        p: 4, // Padding
        bgcolor: 'background.paper', // Background color
        borderRadius: 2, // Rounded corners
        boxShadow: 3, // Shadow
        display: 'flex', // Flex container
        flexDirection: 'column', // Column layout
        alignItems: 'center', // Center alignment
        justifyContent: 'center', // Center alignment
        height: '50vh', // Full viewport height
        width: '100%', // Full width
        border: '2px solid #800080', // Purple border
      }}
    >
      <Typography variant="h4" color="common.white" mb={5} mt={4}>
        Google Spreadsheet Viewer
      </Typography>
      <TextField
        label="Enter Google Spreadsheet Embed Link"
        variant="outlined"
        fullWidth
        value={spreadsheetUrl}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{ mb: 3 }}
      >
        Show Spreadsheet
      </Button>
      {submittedUrl && (
        <Box
          sx={{
            width: '100%',
            height: '80vh', // Adjust height as needed
            borderRadius: 1, // Rounded corners
            overflow: 'hidden', // Hide overflow
            boxShadow: 2,
            padding: '10px', // Padding for the iframe container
            '& iframe': {
              width: '100%',
              height: '100%',
              border: 'none',
            },
            cursor: 'pointer', // Change cursor to pointer
          }}
          onClick={handleRedirect} // Handle redirection on click
        >
          <iframe
            src={submittedUrl}
            title="Google Spreadsheet"
          />
        </Box>
      )}
    </Box>
  );
};

export default GoogleFinance;
