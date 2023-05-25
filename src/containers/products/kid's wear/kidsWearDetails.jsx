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
import { api } from "../../../api";
import { enqueueSnackbar } from "notistack";
import { BASE_URL } from "../../../utils/constants";

function KidsWearProductDetail() {
  const { kidsWear } = useParams();
  console.log("EleProdut_id:", kidsWear);
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const { data } = await api.product.getProductById(kidsWear);
    console.log("product", data);
    setProduct(data?.data?.Product);
  };
  const addToCart = async () => {
    const values = {
      product_id: kidsWear,
    };
    await api.cart
      .add(values)
      .then((data) => {
        console.log(data);
        enqueueSnackbar(data.data.message, { variant: "success" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

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
              image={`${BASE_URL}/${product.image}`}
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
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => addToCart()}
                >
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

export default KidsWearProductDetail;
