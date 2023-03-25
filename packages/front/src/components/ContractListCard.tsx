import React from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, ListItemButton, ListItemText, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Layout } from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { incrementByAmount } from '../store/reducers/counter';
import logo from "./../logo.svg";

export const ContractListCard: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(incrementByAmount(2))
  }

  return (
    <Card>
      <CardContent>
        <Stack gap={2}>

          <Stack direction='row' justifyContent='space-between'>
            <Typography textAlign='start' variant='h4'>Contracts {counter}</Typography>

            <Button onClick={handleClick} variant='contained' color='primary'>Create</Button>
          </Stack>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItemButton>
        </Stack>
      </CardContent>
    </Card>
  )
}
