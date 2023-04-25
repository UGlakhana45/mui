import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@mui/material";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API and update the state
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <Grid container spacing={5} sx={{ paddingTop: 10 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{height:'100%'}}>
              <CardMedia
                component="img"
                sx={{objectFit:'contain',height:"200px",}}
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {product.title}
                </Typography>
                <Typography color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" component="h3">
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
export default ProductList;
