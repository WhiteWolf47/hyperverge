import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Form = () => {
  const theme = useTheme();
  const [formUrl, setFormUrl] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormUrl(event.target.value);
  };

  const handleShowForm = () => {
    if (formUrl) {
      setShowForm(true);
    }
  };

  return (
    <Paper
      sx={{
        bgcolor: theme.palette.background.paper,
        borderRadius: '10px',
        p: { xs: 3, sm: 5 },
        mx: 0, // Center horizontally
        mt: 1,
        mb: 1,
        width: '100%',
        height:'100%',
        maxWidth: 910, // Adjusted width to fit the iframe
        maxHeight: 500, // Adjusted height to fit the iframe    
        border: '2px solid #800080'
      }}
    >
      <Typography variant="h4" color="common.white" mb={3}>
        Google Form
      </Typography>
      <TextField
        label="Enter Google Form URL"
        variant="outlined"
        fullWidth
        value={formUrl}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        onClick={handleShowForm}
        disabled={!formUrl}
      >
        Show Form
      </Button>
      {showForm && (
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '800px',
            overflow: 'hidden',
            borderRadius: '8px',
            mt: 3,
            '& iframe': {
              width: '100%',
              height: '100%',
              border: 'none',
            }
          }}
        >
          <iframe
            src={formUrl}
            title="Google Form"
          >
            Loading…
          </iframe>
        </Box>
      )}
    </Paper>
  );
};

export default Form;
