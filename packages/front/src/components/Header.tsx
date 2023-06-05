import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button, Card, CardContent, CardHeader, CardMedia, Stack, Typography } from '@mui/material';
import logo from "./../logo.svg";

export const Header: React.FC = () => {
  return (
    <AppBar>
      <Box maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', px: '1rem' }}>
          <CardMedia
            sx={{ height: 40, width: 40 }}
            image={logo}
            color='#fff'
          />

          <ConnectButton />
        </Toolbar>
      </Box>
    </AppBar>
  );
};
