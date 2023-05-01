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
import { AxiosApi1 } from "../../api/axios";

function Electronics() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const apiCalling = async () => {
    try {
      const response = await AxiosApi1.get("/products/category/electronics");
      setProducts(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    apiCalling();
  }, []);

  return (
    <Container>
    {error ? <Typography variant="h2" sx={{color:'red',textAlign:'center'}}>{error}</Typography>:
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
                image={product.image}
                alt={product.title}
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
                  {product.title}
                </Typography>

                <Typography variant="h6" component="h3">
                  ${product.price}
                </Typography>
                <CustomButton sx={{ marginTop: "auto" }}>Shop Now</CustomButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid> }
    </Container>
  );
}

export default Electronics;
