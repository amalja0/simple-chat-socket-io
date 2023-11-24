import { ThemeProvider, Typography } from '@mui/material'
import theme from './theme'
import { useEffect, useState } from 'react'
import Login from './views/Login/indes';
import ChatRoom from './views/ChatRoom';

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      {
        !isLoggedIn ? (
          <Login
            room={room}
            setRoom={setRoom}
            username={username}
            setUsername={setUsername}
            setIsLoggedin={setIsLoggedIn}
          />
        ) : (
          <ChatRoom 
            username={username}
            room={room}
          />
        )
      }
    </ThemeProvider>
  )
}

export default App
