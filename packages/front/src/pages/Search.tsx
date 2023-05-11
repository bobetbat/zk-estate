import React, { useMemo, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import SearchCard from '../components/SearchCard';
import SearchBar from '../components/SearchBar';
import FilterCheckboxes from '../components/FilterCheckboxes';
import { Layout } from '../components/Layout';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getItems, useGraph } from '../hooks/useGraph';
import { apartments, filterOptions } from '../mocks';



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

  // const { loading, error, data } = useGraph(getItems);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
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
          <Grid container xs={12}>
            {filteredApartments.map((apartment) => (
              <Grid item xs={12} md={6} pl={3} pt={3} key={apartment.id}>
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
