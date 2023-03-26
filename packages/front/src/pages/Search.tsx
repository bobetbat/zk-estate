import React, { useMemo, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import SearchCard from '../components/SearchCard';
import SearchBar from '../components/SearchBar';
import FilterCheckboxes from '../components/FilterCheckboxes';
import { Layout } from '../components/Layout';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getItems, useGraph } from '../hooks/useGraph';

const filterOptions = {
  location: [
    'Manhattan',
    'Brooklyn',
    'Queens',
    'Bronx',
    'Staten Island',
  ],
  price: [
    'Under $1,000',
    '$1,000 - $2,000',
    '$2,000 - $3,000',
    '$3,000 - $4,000',
    '$4,000 - $5,000',
    'Over $5,000',
  ],
  bedrooms: [
    'Studio',
    '1 Bedroom',
    '2 Bedrooms',
    '3 Bedrooms',
    '4+ Bedrooms',
  ],
};

interface Contract {
  address: string;
}

interface Apartment {
  id: number;
  // address: string
  title: string;
  description: string;
  location: string;
  price: number;
  contract: Contract;
  imageUrls: string[];
}

const apartments: Apartment[] = [
  {
    id: 1,
    contract: {
      address: '0x123',
    },
    title: 'Luxury Apartment in Manhattan',
    description: 'Spacious 2-bedroom apartment with stunning views of Central Park.',
    location: 'Manhattan',
    price: 5000,
    imageUrls: [
      'https://via.placeholder.com/200x200.png?text=Apartment+Image+1',
      'https://via.placeholder.com/200x200.png?text=Apartment+Image+2',
      'https://via.placeholder.com/200x200.png?text=Apartment+Image+3',
    ],
  },
  {
    id: 2,
    contract: {
      address: '0x123',
    }, title: 'Cozy Studio in Brooklyn',
    description: "Charming studio apartment in the heart of Brooklyn's trendiest neighborhood.",
    location: 'Brooklyn',
    price: 2000,
    imageUrls: [
      'https://via.placeholder.com/200x200.png?text=Apartment+Image+4',
      'https://via.placeholder.com/200x200.png?text=Apartment+Image+5',
      'https://via.placeholder.com/200x200.png?text=Apartment+Image+6',
    ],
  },
];

export const Search: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get('location') || '';

  const filteredApartments = useMemo(() => {
    return apartments.filter((apartment) =>
      apartment.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [apartments, query]);

  const handleSearchQueryChange = (value: string) => {
    navigate(`/search?location=${value}`);
  };
  const handleFilterChange = (filterName: string, value: string) => {
    searchParams.set(filterName, value);
    navigate(`/search?${new URLSearchParams(searchParams)}`);
  };

  const { loading, error, data } = useGraph(getItems);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Layout header footer>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" align="center">
            Find Your Dream Apartment
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SearchBar onChange={handleSearchQueryChange} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FilterCheckboxes onChange={handleFilterChange} options={filterOptions} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2} xs={12} >
            {/* <div>
              {data && data.pairs.map(pair => (
                <div key={pair.id}>
                  <p>Pair: {pair.token0.symbol}/{pair.token1.symbol}</p>
                  <p>Reserve: {pair.reserve0}/{pair.reserve1} ({pair.reserveUSD})</p>
                </div>
              ))}
            </div> */}
            {filteredApartments.map((apartment) => (
              <Grid item xs={12} md={6} key={apartment.id}>
                <SearchCard
                  title={apartment.title}
                  description={apartment.description}
                  imageUrls={apartment.imageUrls}
                  handleDetail={() => navigate(`/contract/${apartment.contract.address}`)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};
