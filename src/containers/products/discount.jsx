import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Box,
} from "@mui/material";
import CustomButton from "../../components/CustomButton";

function Discount() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API and update the state
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <Grid container spacing={5} sx={{ paddingTop: 10 }}>
        {products.map((product) => (
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
                <CustomButton sx={{marginTop:'auto'}}>Shop Now</CustomButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Discount;
