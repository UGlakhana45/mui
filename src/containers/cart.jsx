import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  Box,
  Button,
  Grid,
  Container,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../redux/reducers/cartSlice";
import { color } from "../utils/color";
import { Add, Remove } from "@mui/icons-material";
import { api } from "../api";

const CartPage = () => {
  const { user } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log("cart:", cart);

  const fetchDynamicProducts = () => {
    dispatch(fetchCartData(user));
  };
  useEffect(() => {
    fetchDynamicProducts();
  }, []);

  const removeItem = () => {
    console.log();
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cart?.usercart?.forEach((product) => {
      subtotal += product.Product.price;
    });
    return subtotal;
  };

  const handleCheckout = () => {};
  const changeQty = async (params) => {
    console.log(params);
    // await api.cart.update()
  };

  return (
    <Container>
      <Typography variant="h3" sx={{ textAlign: "center", color: "red" }}>
        Your cart
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ flex: 0.5 }}>
          {/* Dynamic Products */}
          {cart?.usercart?.map((product) => (
            <Card
              key={product.id}
              elevation={6}
              sx={{
                display: "flex",
                flexDirection: "row",
                borderRadius: 5,
                flex: 1,
                p: 2,
                m: 2,
              }}
            >
              <CardMedia
                component="img"
                sx={{ objectFit: "contain", height: "150px", width: "100%" }}
                image={`https://ecommerceserver-4zw1.onrender.com/${product.Product.image}`}
                alt={product.Product.name}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <Typography>{product.Product.name}</Typography>
                <Typography sx={{ maxWidth: "150px", textAlign: "center" }}>
                  {product.Product.desc}
                </Typography>
                <Typography
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <Button onClick={changeQty(product.qty, product.id)}>
                    <Remove />
                  </Button>
                  Qty:{product.qty}
                  <Button onClick={changeQty}>
                    <Add />
                  </Button>
                </Typography>

                <Typography>${product.Product.price}</Typography>
                <Button
                  title="remove"
                  onClick={removeItem}
                  sx={{ backgroundColor: "#FF0000", color: "black" }}
                >
                  remove
                </Button>
              </Box>
            </Card>
          ))}
        </div>
        <div>
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

            <Button
              variant="contained"
              color="primary"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </Box>
        </div>
      </div>
    </Container>
  );
};
export default CartPage;
