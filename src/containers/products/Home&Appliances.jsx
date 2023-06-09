import { useState, useEffect } from "react";
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
import { AxiosApi1 } from "../../api/axios";
import { api } from "../../api";

function HomeAppliances() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const apiCalling = async () => {
    let data = "Electronics";
    await api.category
      .get(data)
      .then((e) => {
        console.log(e);
        setProducts(e.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    apiCalling();
  }, []);
  return (
    <Container>
      {error ? (
        <Typography variant="h2" sx={{ textAlign: "center", color: "red" }}>
          {error}
        </Typography>
      ) : (
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
                  image={`https://ecommerceserver-4zw1.onrender.com/${product.image}`}
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
                    ${product.price}
                  </Typography>
                  <CustomButton
                    sx={{ marginTop: "auto", alignSelf: "bottom" }}
                    component={NavLink}
                    to={`/products/productDetails/${product.id}`}
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
export default HomeAppliances;
