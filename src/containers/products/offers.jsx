import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@mui/material";
import CustomButton from "../../components/CustomButton";

function Offers() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((response) => response.json())
      .then((data) =>
        setProducts(
          data.map((product) => ({
            id: product.id,
            title: product.title,
            image: product.url,
            price: product.id * 10, // just a placeholder value for demo purposes
            discount: Math.floor(Math.random() * 20), // random discount value between 0 and 19
          }))
        )
      )
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <Grid container spacing={5} sx={{ paddingTop: 10 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                sx={{ objectFit: "contain", height: "200px" }}
                image={product.image}
                alt={product.title}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "auto",
                }}
              >
                <Typography variant="h5" component="h2">
                  {product.title}
                </Typography>
                <Typography variant="h6" component="h3">
                  ${product.price}
                </Typography>
                <Typography variant="h6" component="h3">
                  {product.discount}% off
                </Typography>
                <CustomButton sx={{ marginTop: "auto" }}>Shop Now</CustomButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Offers;
