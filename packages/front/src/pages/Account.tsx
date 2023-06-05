import React from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Layout } from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { incrementByAmount } from '../store/reducers/counter';
import logo from "./../logo.svg";
import { AccountCard } from '../components/AccountCard';
import { PropertyCard } from '../components/PropertyCard';
import { ContractListCard } from '../components/ContractListCard';

export const Account: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(incrementByAmount(2))
  }

  return (
    <Layout header footer>
      <AccountCard />
      <PropertyCard />
      <ContractListCard />
    </Layout>
  )
}
