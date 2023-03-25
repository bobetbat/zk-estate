import React from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Layout } from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { incrementByAmount } from '../store/reducers/counter';
import logo from "./../logo.svg";
import { useParams } from 'react-router-dom';

export const Contract: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(incrementByAmount(2))
  }
  const { id } = useParams();

  return (
    <Layout header footer>
      <Card>
        <CardContent>
          <Stack gap={2}>
            <Typography textAlign='start' variant='h4'>Contract {id}</Typography>
            <Stack gap={2} mt={1}>
              <Button onClick={handleClick} variant='contained' color='primary'> click me </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Layout>
  )
}
