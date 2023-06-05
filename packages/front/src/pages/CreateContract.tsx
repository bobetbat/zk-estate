import React from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Layout } from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { incrementByAmount } from '../store/reducers/counter';
import logo from "./../logo.svg";

export const CreateContract: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(incrementByAmount(2))
  }

  return (
    <Layout header footer>
      <Card>
        <CardContent>
          <Stack gap={2}>
            <Typography textAlign='start' variant='h4'>Create Offer {counter}</Typography>
            <Stack gap={2} mt={1}>
              <Button variant="contained" component="label">
                Upload Image
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <TextField id="outlined-basic" label="Address" variant="outlined" />
              <TextField id="outlined-basic" label="Address" variant="outlined" />
              <TextField id="outlined-basic" label="Address" variant="outlined" />
              <TextField id="outlined-basic" label="Address" variant="outlined" />
              <TextField id="outlined-basic" label="Address" variant="outlined" />
              <TextField id="outlined-basic" label="Address" variant="outlined" />
              <Button onClick={handleClick} variant='contained' color='primary'> click me </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Layout>
  )
}
