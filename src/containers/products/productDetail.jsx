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
import { api } from "../../api";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log(id);

  const getProduct = async () => {
    const { data } = await api.product.getProductById(id);
    setProduct(data.product);
    console.log(data.product);
  };

  useEffect(() => {
    getProduct();
  });

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container sx={{ paddingTop: 10 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component={"img"}
              image={`https://ecommerceserver-4zw1.onrender.com/${product.image}`}
              alt={product.name}
              sx={{ maxHeight: 500, objectFit: "contain", padding: "15px" }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h4" component={"h1"}>
                {product.name}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                In Stock 5 Availabel
              </Typography>
              <Typography variant="h5" component={"h2"} sx={{ marginTop: 2 }}>
                ${product.price}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 2 }}>
                {product.desc}
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
