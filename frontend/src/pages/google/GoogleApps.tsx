import { ReactElement } from 'react';
import { Box } from '@mui/material';
import NotionPage from 'components/sections/otherapps/notion/NotionPage';
import { NeonGradientCard } from './NeonGradientCard';

const GoogleApps = (): ReactElement => {
  return (
    <>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3.5}>
        <Box gridColumn={{ xs: 'span 8', lg: 'span 4' }} order={{ xs: 1, '2xl': 1 }}>
          <NeonGradientCard
            className="my-custom-card"
            borderSize={4}
            borderRadius={24}
            neonColors={{
              firstColor: "#ff00aa",
              secondColor: "#00FFF1"
            }}
          >
            <div>
              <h2>My Neon Gradient Card</h2>
              <p>This is an example of a Neon Gradient Card used inside the GoogleApps component.</p>
            </div>
          </NeonGradientCard>
        </Box>
        <Box gridColumn={{ xs: 'span 6', lg: 'span 8 ' }} order={{ xs: 2, '2xl': 2 }}>
          <NotionPage />
        </Box>
      </Box>
    </>
  );
};

export default GoogleApps;
