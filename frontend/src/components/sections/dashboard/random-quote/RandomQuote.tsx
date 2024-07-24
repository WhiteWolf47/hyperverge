import { ReactElement, useState, useEffect } from 'react';
import { Box, Paper, Typography, CircularProgress } from '@mui/material';

const RandomQuote = (): ReactElement => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
      const response = await fetch('https://api.quotable.io/random?tags=productivity|motivational|work|team-spirit|optimistic');
        const data = await response.json();
        setQuote({
          subtitle: data.content,
          author: data.author,
          color: "success.main"
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quote: ", error);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <Paper sx={{ p: { xs: 4, sm: 8 }, height: 1 }}>
      <Typography variant="h4" color="common.white" mb={1.25}>
        Today's Quote
      </Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ width: '100%'}}>
          {quote && (
            <>
              <Typography 
                variant="h6" 
                color="text.primary" 
                align="center" 
                mb={2}
                sx={{ fontStyle: 'italic', lineHeight: 1.5, textAlign: 'center', paddingBottom:'50'}}
              >
                "{quote.subtitle}"
              </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ marginLeft: 2 , textAlign: 'center' }}
                >
                  - {quote.author}
                </Typography>
            </>
          )}
        </Box>
      )}
    </Paper>
  );
};

export default RandomQuote;