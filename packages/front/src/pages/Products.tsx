import React from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Layout } from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { incrementByAmount } from '../store/reducers/counter';

export const Products: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(incrementByAmount(2))
  }

  return (
    <Layout header footer>
      <Box mt='12vh'>
        <Typography variant='h4'>About Product {counter}</Typography>
        <Button onClick={handleClick} variant='contained' color='primary'> click me </Button>
      </Box>
    </Layout>
  )
}
