import { useState, useEffect } from "react";
import axios from "../../api/axios";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Container,
  Box,
} from "@mui/material";

import CustomButton from "../../components/CustomButton";
import { NavLink } from "react-router-dom";

function Discount() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const getApiData = async () => {
    try {
      const response = await axios.get("v2/beers");
      setProducts(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    // Now you can use the axios library to make HTTP requests
    getApiData();
  }, []);

  return (
    <Container>
      {error ? (
        <Typography variant="h2" sx={{ color: "red", textAlign: "center" }}>
          {error}
        </Typography>
      ) : (
        <Grid container spacing={5} sx={{ paddingTop: 10 }}>
          {products.slice(0, 12).map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  p: 2,
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ objectFit: "contain", height: "200px" }}
                  image={product.image_url}
                  alt={product.name}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "auto",
                  }}
                >
                  <Typography variant="h5" component="h2">
                    {product.name}
                  </Typography>

                  <Typography variant="h6" component="h3">
                    {product.tagline}
                  </Typography>
                  <CustomButton
                    sx={{ marginTop: "auto", alignSelf: "bottom" }}
                    component={NavLink}
                    to={`/products/discount/productDetails/${product.id}`}
                  >
                    Shop Now
                  </CustomButton>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Discount;
