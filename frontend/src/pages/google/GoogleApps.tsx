import { ReactElement } from 'react';
import { Box } from '@mui/material';
import GoogleSpreadsheets from 'components/sections/googleapps/GoogleSpreadsheets';
import GoogleSlides from 'components/sections/googleapps/GoogleSlides';
import GoogleBooks from 'components/sections/googleapps/GoogleBooks';
import GoogleCalendar from 'components/sections/googleapps/GoogleCalendar';



const GoogleApps = (): ReactElement => {
  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3.5} paddingTop={4}>
      <Box gridColumn={{ xs: 'span 12', md: 'span 6', xl: 'span 4' }} order={{ xs: 2, xl: 2, '2xl': 2 }}>
        <GoogleSpreadsheets />
      </Box>  
      <Box gridColumn={{ xs: 'span 12', md: 'span 6', xl: 'span 4' }} order={{ xs: 1, xl: 1, '2xl': 1 }}>
        <GoogleSlides />
      </Box>  
      <Box gridColumn={{ xs: 'span 12', md: 'span 6', xl: 'span 4' }} order={{ xs: 3, xl: 3, '2xl': 3 }}>
        <GoogleBooks/>
      </Box>  
      <Box gridColumn={{ xs: 'span 12', md: 'span 12', xl: 'span 12' }} order={{ xs: 4, xl: 4, '2xl': 4 }}>
        <GoogleCalendar />
      </Box>  

      </Box>
    </>
  );
};

export default GoogleApps;
