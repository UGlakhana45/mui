import React from 'react';
import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';
import { Categories } from '../utils/commonImages/catogoryImages';

// Define the categories and images


// Define the styles for the category name and image
const CategoryName = styled('div')(({ theme }) => css`
  font-size: ${theme.typography.h5.fontSize};
  font-weight: ${theme.typography.fontWeightBold};
  text-align: center;
  padding: ${theme.spacing(2)};
`);
const CategoryImage = styled('div')(({ image }) => css`
  height: 250px;
  width: 100%;
  background-image: url(${image});
  background-size: cover;
  
`);

function CategoryGrid() {
  return (
    <Grid container spacing={2} justifyContent="center">
      {Categories.map((category) => (
        <Grid item key={category.name} xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={3}>
            <CategoryName>{category.name}</CategoryName>
            <CategoryImage image={category.image}/>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default CategoryGrid;
