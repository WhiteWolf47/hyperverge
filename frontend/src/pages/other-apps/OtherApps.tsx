    import { ReactElement } from 'react';
    import { Box } from '@mui/material';
    import NotionPage from 'components/sections/otherapps/notion/NotionPage';
    import Chat from 'components/sections/otherapps/Chat';




    const OtherApps = (): ReactElement => {
        return (
        <>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3.5}>
            <Box gridColumn={{ xs: 'span 8', lg: 'span 7' }} order={{ xs: 1, '2xl': 1 }}>
                <Chat />
            </Box>
            <Box gridColumn={{ xs: 'span 6', lg: 'span 5 ' }} order={{ xs: 2, '2xl': 2 }}>
                <NotionPage />
            </Box>
            </Box>
        </>
        );
    };

    export default OtherApps;