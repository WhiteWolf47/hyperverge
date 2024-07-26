import { ReactElement } from 'react';
import { Box } from '@mui/material';
import DailyGrowthChecklist from 'components/sections/dashboard/to-do/DailyGrowthChecklist';
import Announcements from 'components/sections/dashboard/announcement/Announcement';
import PomodoroTimer from 'components/sections/dashboard/pomodoro-timer/Pomodoro';
import RandomQuote from 'components/sections/dashboard/random-quote/RandomQuote';
import PollWidget from 'components/sections/dashboard/poll/PollWidget';
import Form from 'components/sections/dashboard/googleform/Form';
import Meet from 'components/sections/dashboard/Meet';

const Dashboard = (): ReactElement => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 3.5,
        height: '100vh', // Optional: Ensures the container takes up full viewport height
      }}
    >
      <Box gridColumn={{ xs: 'span 4', '2xl': 'span 6' }} order={{ xs: 0 }} sx={{ height: '250px' }}>
        <RandomQuote />
      </Box>
      <Box gridColumn={{ xs: 'span 10', lg: 'span 8' }} order={{ xs: 1, '2xl': 1 }} sx={{ height: '250px' }}>
        <Announcements />
      </Box>
      <Box gridColumn={{ xs: 'span 4', lg: 'span 4' }} order={{ xs: 2, '2xl': 2 }}>
        <PomodoroTimer />
      </Box>
      <Box gridColumn={{ xs: 'span 8', xl: 'span 8' }} order={{ xs: 3, xl: 3, '2xl': 3 }} sx={{ height: '500px' }}>
        <DailyGrowthChecklist />
      </Box>
      <Box gridColumn={{ xs: 'span 12', md: 'span 6', xl: 'span 4' }} order={{ xs: 4, xl: 4, '2xl': 4 }}>
        <PollWidget />
      </Box>  
      <Box gridColumn={{ xs: 'span 12', md: 'span 6', xl: 'span 8' }} order={{ xs: 5, xl: 5, '2xl': 5 }}>
        <Form />
      </Box>
      <Box gridColumn={{ xs: 'span 12', md: 'span 12', xl: 'span 12' }} order={{ xs: 6, xl: 6, '2xl': 6 }}>
        <Meet />
      </Box>
    </Box>
  );
};

export default Dashboard;
