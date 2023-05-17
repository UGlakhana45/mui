import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { css } from "@emotion/react";
import { Categories } from "../utils/commonImages/catogoryImages";
import { Link } from "react-router-dom";

// Define the categories and images

// Define the styles for the category name and image
const CategoryName = styled("div")(
  ({ theme }) => css`
    font-size: ${theme.typography.h5.fontSize};
    font-weight: ${theme.typography.fontWeightBold};
    text-align: center;
    padding: ${theme.spacing(2)};
  `
);
const CategoryImage = styled("div")(
  ({ image }) => css`
    height: 250px;
    width: 100%;
    background-image: url(${image});
    background-size: cover;
  `
);
// const handleProductCategory = () => {

// };
function CategoryGrid() {
  return (
    <Grid container spacing={2} justifyContent="center">
      {Categories.map((category) => (
        <Grid item key={category.name} xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={3}>
            <Box component={Link} to="/products">
              <CategoryName>{category.name}</CategoryName>
              <CategoryImage image={category.image} />
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default CategoryGrid;
