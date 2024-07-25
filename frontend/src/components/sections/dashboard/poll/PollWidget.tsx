import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Paper,
  Stack,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const PollWidget = () => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState('');
  const [pollSubmitted, setPollSubmitted] = useState(false);

  const pollQuestion = 'How do you feel about this Pomodoro session?';
  const pollOptions = ['Great!', 'Good', 'Okay', 'Bad'];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmitPoll = () => {
    if (selectedOption) {
      setPollSubmitted(true);
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
    maxWidth: 500,
    boxShadow: '0 0 15px rgba(128, 0, 128, 0.7)',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-2px',
      left: '-2px',
      right: '-2px',
      bottom: '-2px',
      borderRadius: '10px',
      border: '2px solid #800080',
      pointerEvents: 'none',
    }
  }}
>
  
      <Typography variant="h4" color="common.white" mb={3}>
        Poll
      </Typography>
      {!pollSubmitted ? (
        <FormControl component="fieldset">
          <FormLabel component="legend">{pollQuestion}</FormLabel>
          <RadioGroup value={selectedOption} onChange={handleOptionChange}>
            {pollOptions.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
          <Stack direction="row" spacing={2} mt={3}>
            <Button
              variant="contained"
              onClick={handleSubmitPoll}
              disabled={!selectedOption}
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              onClick={() => setSelectedOption('')}
            >
              Reset
            </Button>
          </Stack>
        </FormControl>
      ) : (
        <Typography variant="h6" color="common.white">
          Thank you for your feedback!
        </Typography>
      )}
    </Paper>
  );
};

export default PollWidget;
