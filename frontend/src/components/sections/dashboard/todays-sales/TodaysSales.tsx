import { ReactElement } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import salesData from 'data/sales-data';

const TodaysSales = (): ReactElement => {
  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      <Typography variant="h4" color="common.white" mb={1.25}>
        Today Sales
      </Typography>
      <Typography variant="subtitle2" color="text.disabled" mb={6}>
        Sales Summary
      </Typography>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={{ xs: 4, sm: 6 }}>
        {salesData.map((saleItem) => (
          <Box key={saleItem.id} gridColumn={{ xs: 'span 12', sm: 'span 6', lg: 'span 3' }}>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default TodaysSales;
