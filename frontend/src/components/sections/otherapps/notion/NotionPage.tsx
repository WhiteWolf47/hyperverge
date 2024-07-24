import React from 'react';
import { Box, Typography } from '@mui/material';

const NotionPage = () => {
  const handleRedirect = () => {
    window.open('https://www.notion.so/', '_blank', 'noopener,noreferrer');
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
        height: '100vh', // Full viewport height
        width: '100%', // Full width
      }}
        onClick={handleRedirect}
    >
      <Typography variant="h4" color="common.white" mb={5} mt={4}>
        Notion Page
      </Typography>
      <Box
        sx={{
          width: '100%',
          height: '80vh', // Adjust height as needed
          border: 'none', // No border
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
          src="https://e.notionhero.io/e1/p/7741d03-46b69d7e49ac7e50b4370d18d536e45"
          title="Notion Page"
        />
      </Box>
    </Box>
  );
};

export default NotionPage;
