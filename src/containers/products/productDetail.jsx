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
import { useSelector } from "react-redux";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { user } = useSelector((state) => state.auth);

  const getProduct = async () => {
    const { data } = await api.product.getProductById(id);
    setProduct(data.product);
  };
  const addToCart = async () => {
    const values = {
      user_id: user,
      product_id: product.id,
    };
    console.log(values);
    const data = await api.cart
    
      .add(values)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
  }, [product]);

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
                <Button variant="contained" size="large" onClick={addToCart}>
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
