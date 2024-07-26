import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Calendar from 'color-calendar';
import 'color-calendar/dist/css/theme-basic.css'; // Import theme CSS

const GoogleCalendar = () => {
  useEffect(() => {
    new Calendar({
      id: '#color-calendar',
      calendarSize: 'large',
      theme: 'basic',
      primaryColor: '#800080',
      headerColor: '#ffffff',
      headerBackgroundColor: '#800080',
      weekdaysColor: '#800080',
      fontFamilyHeader: 'Open Sans, sans-serif',
      fontFamilyWeekdays: 'Open Sans, sans-serif',
      fontFamilyBody: 'Open Sans, sans-serif',
      borderRadius: '0.5rem',
      monthDisplayType: 'long', // Ensures the full month name is displayed
      eventsData: [
        {
          start: '2024-07-20T00:00:00',
          end: '2024-07-20T23:59:59',
          name: 'Event 1'
        },
        {
          start: '2024-07-21T00:00:00',
          end: '2024-07-21T23:59:59',
          name: 'Event 2'
        }
      ]
    });
  }, []);

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
        height: '80vh',
        width: '100%',
        border: '2px solid #800080',
      }}
    >
      <Typography variant="h4" color="common.white" mb={5}>
        Calendar Viewer
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'auto',
          borderRadius: 1,
          overflow: 'hidden',
          boxShadow: 2,
          padding: '10px',
          bgcolor: 'background.paper',
        }}
      >
        <div id="color-calendar" />
      </Box>
    </Box>
  );
};

export default GoogleCalendar;
