'use client';

import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import WizardForm from '@/components/WizardForm';
import LoginPage from '@/components/LoginPage';

const golfTheme = createTheme({
  palette: {
    primary: {
      main: '#005A2B',
    },
    secondary: {
      main: '#FDB813',
    },
  },
});

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <ThemeProvider theme={golfTheme}>
      {isLoggedIn ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center', // 水平置中
            alignItems: 'center',     // 垂直置中
            minHeight: '100vh',       // 確保容器佔據整個視窗高度
          }}
        >
          <WizardForm />
        </div>
      ) : (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}
    </ThemeProvider>
  );
}
