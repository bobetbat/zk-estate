import React from 'react';
// import { Button, Card, CardContent, CardHeader, CardMedia, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Layout } from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { incrementByAmount } from '../store/reducers/counter';
import logo from "./../logo.svg";
import { useParams } from 'react-router-dom';
import PropertyDetails from '../components/PropertyDetails';
import { Button, Card, CardContent, CardHeader, CardMedia, ListItem, ListItemText, Stack, TextField, Typography } from '@mui/material';

const mockdata = { "id": "1234", "title": "Spacious 2-Bedroom Apartment in the Heart of the City", "description": "This beautiful 2-bedroom apartment is located in the heart of the city and offers stunning views of the skyline. It features a spacious living room, fully equipped kitchen, and modern amenities.", "images": ["https://example.com/image1.jpg", "https://example.com/image2.jpg", "https://example.com/image3.jpg"], "area": { "size": 1000, "unit": "sqft" }, "building": { "name": "The Tower", "address": "123 Main St, City, State Zip", "yearBuilt": 2015, "floors": 20, "amenities": ["Swimming Pool", "Fitness Center", "24-Hour Concierge"] }, "consumption": { "electricity": { "usage": 200, "unit": "kWh" }, "water": { "usage": 500, "unit": "gal" } }, "price": { "amount": 2500, "currency": "USD", "period": "month" } }

export const Contract: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(incrementByAmount(1))
  }
  const { id } = useParams();
  const handleApprove = () => {
    alert('Approved tenant')
  }
  return (
    <Layout header footer>
      <PropertyDetails propertyDetail={mockdata} handleCollateralLock={handleClick} />
      {counter > 0 ? <ListItem>
        <ListItemText primary={'Candidate'} />
        <Button onClick={handleApprove} variant='contained' color='primary'>Approve</Button>
      </ListItem> : null}
    </Layout >
  )
}
