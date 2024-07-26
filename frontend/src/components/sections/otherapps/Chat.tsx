import { useState } from 'react';
import axios from 'axios';
import { Box, Typography, Button, TextField, Paper } from '@mui/material';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chat = () => {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string>('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage: Message = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput('');

    try {
      const apiUrl = 'https://api.openai.com/v1/chat/completions';
      const apiKey = process.env.REACT_APP_OPEN_API_KEY;
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      };

      const requestBody = {
        model: 'gpt-4',
        messages: [...messages, newMessage],
      };

      const { data } = await axios.post(apiUrl, requestBody, { headers });

      setMessages((prevMessages) => [
        ...prevMessages,
        newMessage,
        { role: 'assistant', content: data.choices[0].message.content },
      ]);
      setError(''); // Clear any previous error
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Error sending message: ' + error.response?.data?.error?.message || error.message);
    }
  };

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
        height: '100vh',
        width: '100%',
        border: '2px solid #800080',
      }}
    >
      <Typography variant="h4" color="common.white" mb={2} pb={10}>
        Chat with AI
      </Typography>
      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          height: '70vh',
          borderRadius: 1,
          overflowY: 'auto',
          boxShadow: 2,
          padding: '10px',
          bgcolor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ flex: 1, overflowY: 'auto', mb: 2 }}>
          {messages.map((message, index) => (
            <Paper
              key={index}
              sx={{
                p: 2,
                mb: 1,
                bgcolor: message.role === 'user' ? 'primary.light' : 'secondary.light',
                alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '75%',
              }}
            >
              <Typography variant="body1" color={message.role === 'user' ? 'primary.contrastText' : 'secondary.contrastText'}>
                {message.content}
              </Typography>
            </Paper>
          ))}
        </Box>
        {error && (
          <Typography variant="body2" color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField

            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            sx={{
              mr: 2,
            }}
          />
          <Button variant="contained" color="primary" onClick={sendMessage}>
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
