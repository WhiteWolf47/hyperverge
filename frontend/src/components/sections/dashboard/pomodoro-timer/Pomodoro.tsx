import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Slider,
  Stack,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const PomodoroTimer = () => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Default to 25 minutes
  const [workDuration, setWorkDuration] = useState(25 * 60); // Default to 25 minutes
  const [breakDuration, setBreakDuration] = useState(5 * 60); // Default to 5 minutes
  const [flashMessage, setFlashMessage] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && timeLeft > 0 && !isPaused) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (isBreak) {
        setIsActive(false);
        setIsBreak(false);
        setFlashMessage(false);
        setTimeLeft(workDuration); // Reset to work duration
      } else {
        setIsBreak(true);
        setTimeLeft(breakDuration);
        setFlashMessage(true); // Show flash message for break
        setIsActive(false);
      }
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, isPaused, isBreak]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleStartPause = () => {
    if (isActive && !isPaused) {
      setIsPaused(true);
    } else {
      setIsActive(true);
      setIsPaused(false);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setIsBreak(false);
    setTimeLeft(workDuration);
    setFlashMessage(false);
  };

  const handleWorkDurationChange = (event: Event, newValue: number | number[]) => {
    if (!isActive) {
      setWorkDuration(newValue as number);
      setTimeLeft(newValue as number);
    }
  };

  const handleBreakDurationChange = (event: Event, newValue: number | number[]) => {
    if (!isActive) {
      setBreakDuration(newValue as number);
    }
  };

  const handleFlashMessageClick = () => {
    setFlashMessage(false);
    setIsBreak(false);
    setTimeLeft(workDuration); 
    handleStartPause();
  };

  const progressColor = isBreak
    ? theme.palette.error.main
    : theme.palette.success.main;

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.paper,
        borderRadius: 4,
        p: 4,
        width: '400px',
        mx: 'auto',
        position: 'relative', 
      }}
    >
      <Typography variant="h4" color="common.white" mb={5} mt={4}>
        Pomodoro Timer
      </Typography>
      <Stack direction="column" alignItems="center" spacing={3}>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 150,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={(timeLeft / (isBreak ? breakDuration : workDuration)) * 100}
            size={120}
            sx={{
              color: progressColor,
            }}
          />
          <Typography
            variant="h4"
            sx={{
              position: 'absolute',
              color: theme.palette.text.primary,
            }}
          >
            {formatTime(timeLeft)}
          </Typography>
        </Box>
        {flashMessage && (
          <Box
            sx={{
              position: 'absolute',
              px: 4,
            py: 2,
            borderRadius: 1,
              bgcolor: theme.palette.warning.main,
              color: theme.palette.warning.contrastText,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              textAlign: 'center',
              animation: 'flash 1s infinite', // Flash animation
              cursor: 'pointer',
              height: '100%',
              gap: 10,
            }}
            onClick={handleFlashMessageClick}
          >
            Take a break!
          </Box>
        )}
        <Stack spacing={2} width="100%">
          <Typography variant="body2" color="text.secondary">
            Work Duration
          </Typography>
          <Slider
            value={workDuration}
            onChange={handleWorkDurationChange}
            min={1 * 60}
            max={25 * 60}
            step={1 * 60}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${Math.floor(value / 60)}m`}
            sx={{
              color: theme.palette.success.main,
            }}
            disabled={isActive}
          />
          <Typography variant="body2" color="text.secondary">
            Break Duration
          </Typography>
          <Slider
            value={breakDuration}
            onChange={handleBreakDurationChange}
            min={1 * 60}
            max={15 * 60}
            step={1 * 60}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${Math.floor(value / 60)}m`}
            sx={{
              color: theme.palette.error.main,
            }}
            disabled={isActive}
          />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            onClick={handleStartPause}
          >
            {isActive ? (isPaused ? 'Resume' : 'Pause') : 'Start'}
          </Button>
          <Button
            variant="outlined"
            onClick={handleReset}
          >
            Reset
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PomodoroTimer;
