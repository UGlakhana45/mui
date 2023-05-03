import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";

function ProductDetail() {
  const { id, did } = useParams();
  const [product, setProduct] = useState(null);
  console.log(id);
  useEffect(() => {
    
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error(error));
    }
    else {
      fetch(`https://api.punkapi.com/v2/beers/${did}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, description, image, price, category } = product;

  return (
    <Container sx={{ paddingTop: 10 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component={'img'}
              image={image}
              alt={title}
              sx={{ height: 600 }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" component={'h1'}>
                {title}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {category}
              </Typography>
              <Typography variant="h5" component={'h2'} sx={{ marginTop: 2 }}>
                ${price}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                {description}
              </Typography>
              <Box sx={{ marginTop: 2 }}>
                <Button variant="contained" size="large">
                  Add to Cart
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;
