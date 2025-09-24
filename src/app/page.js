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
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
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
