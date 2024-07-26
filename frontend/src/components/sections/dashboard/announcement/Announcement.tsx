import { ReactElement } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import Slider from 'react-slick';
import announcements, { Announcement } from './data/announcements_data'; // Correct path
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sliderStyles.css';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnHover: true, // Stops sliding temporarily when hovered
  appendDots: (dots: ReactElement[]) => (
    <Box component="ul" sx={{ display: 'flex', justifyContent: 'center', listStyle: 'none' }}>
      {dots}
    </Box>
  ),
  customPaging: (_i: number) => (
    <Box 
      sx={{
        width: 8,
        height: 8,
        bgcolor: 'text.primary',
        borderRadius: '50%',
        display: 'inline-block',
        margin: '0 4px',
      }}
    />
  ),
};

const Customers = (): ReactElement => {
  return (
    <Paper
      sx={{
        p: { xs: 4, sm: 8 },
        height: 1,
        position: 'relative',
        borderRadius: '10px',
        backgroundColor: 'background.paper',
        border: '2px solid #800080'
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={5}
        flexWrap="wrap"
        gap={3}
      >
        <Typography variant="h4" color="common.white">
          Announcements
        </Typography>
      </Stack>
      <Box width={1} flexGrow={1} minHeight={325} position="relative">
        <Slider {...sliderSettings} className="announcement-slider">
          {announcements.map((announcement: Announcement, index: number) => (
            <Box key={index} p={2} sx={{ bgcolor: 'background.paper', borderRadius: 1 }}>
              <Typography variant="h6" color="text.primary">
                {announcement.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {announcement.content}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Paper>
  );
};

export default Customers;
