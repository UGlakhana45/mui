import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
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
    <Grid container spacing={2} sx={{paddingTop:10}}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={3} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
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
  );
}
export default ProductList;