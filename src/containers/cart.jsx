import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  Box,
  Button,
  colors,
  Grid,
} from "@mui/material";
import { cartStatic } from "../utils/commonImages/catogoryImages";
import { color } from "../utils/color";

const CartPage = () => {
  // Placeholder data for the static product
  const staticProduct = {
    id: 1,
    name: "iphone 14",
    price: 19.99,
    image: cartStatic.image,
    quantity: 1,
  };

  // Function to fetch dynamic products from APIs
  const fetchDynamicProducts = () => {
    // Implement your API logic here to fetch dynamic products
    // Return an array of dynamic products
    return [];
  };

  // Fetch dynamic products
  const dynamicProducts = fetchDynamicProducts();

  // State for product quantities
  const [productQuantities, setProductQuantities] = useState(
    dynamicProducts.reduce((quantities, product) => {
      quantities[product.id] = 1; // Initialize all quantities to 1
      return quantities;
    }, {})
  );

  // Function to handle quantity increment
  const handleIncrement = (productId) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1,
    }));
  };

  // Function to handle quantity decrement
  const handleDecrement = (productId) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(prevQuantities[productId] - 1, 0),
    }));
  };

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    let subtotal = staticProduct.price * staticProduct.quantity; // Add the static product price to the subtotal

    dynamicProducts.forEach((product) => {
      const quantity = productQuantities[product.id];
      subtotal += product.price * quantity;
    });

    return subtotal;
  };

  const handleCheckout = () => {};

  return (
    <>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", color: color.heading }}
      >
        Your cart
      </Typography>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <Grid container spacing={5} sx={{ paddingTop: 10 }}>
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
                image={staticProduct.image}
                alt="iphone 14"
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
                  {staticProduct.name}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleDecrement(staticProduct.id)}
                    disabled={staticProduct.quantity <= 1}
                  >
                    -
                  </Button>
                  <Typography
                    variant="h6"
                    component="h3"
                    style={{ margin: "0 8px" }}
                  >
                    {staticProduct.quantity}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleIncrement(staticProduct.id)}
                  >
                    +
                  </Button>
                </Box>
                <Typography variant="h6" component="h3">
                  ${staticProduct.price * staticProduct.quantity}
                </Typography>
              </Box>
            </Card>

            {/* Dynamic Products */}
            {dynamicProducts.map((product) => (
              <Card
                key={product.id}
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  p: 2,
                }}
              >
                {/* ... */}
              </Card>
            ))}
          </Grid>
        </div>

        {/* Subtotal and Checkout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            minWidth: "200px",
          }}
        >
          <Typography variant="h6" component="h3" gutterBottom>
            Subtotal: ${calculateSubtotal().toFixed(2)}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleCheckout}>
            Checkout
          </Button>
        </Box>
      </div>
    </>
  );
};

export default CartPage;
