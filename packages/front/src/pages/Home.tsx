import React from 'react';
import { Container } from '@mui/material';
import { Layout } from '../components/Layout';

export const Home: React.FC = () => {
  return (
    <Layout header footer>
      <Container>
        Hello
      </Container>
    </Layout>
  );
}
