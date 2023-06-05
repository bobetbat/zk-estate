import React from 'react';
import { Container, Typography, Button, Stack } from '@mui/material';
import { Layout } from '../components/Layout';
import { useNavigate } from 'react-router';

export const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Layout header footer>
      <Container>
        <Typography variant="h1">Welcome to Web3 renting platform</Typography>
        <Stack mt='2rem' gap={1} direction='row' justifyContent='space-evenly'>
          <Button size='large' variant='contained' onClick={() => navigate('/search')}>Find home</Button>
          <Button size='large' variant='contained' onClick={() => navigate('/account')}>List apartment</Button>
        </Stack>
      </Container>
    </Layout>
  );
}
