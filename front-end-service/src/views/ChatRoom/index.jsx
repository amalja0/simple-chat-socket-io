import { Box, Button, Container, Grid, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import ChatBubble from '../../components/ChatBubble';

function ChatRoom({ username, room }) {

  return (
    <Container>
      <Grid
        container 
        gap={3}
        flexDirection={'column'} 
        alignItems={"center"} 
        justifyContent={"center"} 
        height={'97vh'}
      >
        <Grid item sx={{ width: '60%' }}>
          <Typography variant='h5'>
            Welcome to room <b>{room}</b>, {username}.
          </Typography>
        </Grid>
        <Grid item sx={{ width: '60%', bgcolor: '#ccd8e2', paddingX: '2rem', borderRadius: 6 }}>
          <Box 
            className="chat-box"
            sx={{ 
              width: '100%',
              paddingY: '2rem',
              borderRadius: 4,
              height: '60vh',
              overflow: 'auto'
            }}
          >
            <ChatBubble 
              isSender={false}
              username={username}
              message={"hi"}
              time={"12:12"}
            />
            <ChatBubble 
              isSender={true}
              username={username}
              message={"hi"}
              time={"12:12"}
            />
          </Box>
          <Grid 
            container 
            alignItems={"center"}
            width={"100%"} 
            sx={{
              paddingY: '0.5rem',
              borderTop: '2px solid #99b1c5',
            }}
          >
            <Grid item xs={11}>
              <TextField 
                variant="standard"
                placeholder='Type your message'
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    paddingX: '0.5rem'
                  }
                }}
              />
            </Grid>
            <Grid item xs={1}>
              <Button
                
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ChatRoom;