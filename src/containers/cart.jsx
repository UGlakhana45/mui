import React, { useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  Box,
  Button,
  Container,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../redux/reducers/cartSlice";
import { Add, Remove } from "@mui/icons-material";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../components/emptyCart";
import { BASE_URL } from "../utils/constants";

const CartPage = () => {
  const [Total, setTotal] = useState();
  const { user } = useSelector((state) => state.auth);
  console.log("user", user);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("cart:", cart.data.data);
  const fetchDynamicProducts = () => {
    dispatch(fetchCartData());
  };
  useEffect(() => {
    fetchDynamicProducts();
  }, []);

  const removeItem = async (product_id) => {
    const data = {
      product_id: product_id,
    };
    console.log(data);
    await api.cart.remove(data.product_id);
    dispatch(fetchCartData(user));
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cart?.data?.data?.forEach((product) => {
      subtotal += product?.product_id?.price * product?.qty;
    });

    return subtotal;
  };

  const handleCheckout = () => {};

  const decrementQty = async (id, qty) => {
    console.log(id, qty);
    let newQty = qty;
    if (qty > 1) {
      newQty -= 1;
      const data = {
        qty: newQty,
        id: id,
      };
      console.log(data);
      await api.cart.update(data);
      dispatch(fetchCartData(user));
    }
  };
  const incrementQty = async (id, qty) => {
    console.log(id, qty);
    let newQty = parseInt(qty);
    if (newQty > 0) {
      newQty += 1;
      const data = {
        qty: newQty,
        id: id,
      };
      console.log(data);
      await api.cart.update(data);
      dispatch(fetchCartData(user));
    }
  };

  return (
    <div>
      {cart?.data?.data?.length === 0 ? (
        <>
          <EmptyCart />
        </>
      ) : (
        <Container>
          <Typography
            sx={{
              textAlign: "center",
              m: 3,
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
            My Cart
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
              width: "100%",
            }}
          >
            <Box sx={{ width: "100%" }}>
              {/* Dynamic Products */}
              {cart?.data?.data?.map((product) => (
                <Card
                  key={product.id}
                  elevation={6}
                  sx={{
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    },
                    borderRadius: 1,
                    p: 2,
                    m: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      objectFit: "contain",
                      height: "150px",
                      width: "100%",
                    }}
                    image={`${BASE_URL}/${product?.product_id?.image}`}
                    alt={product?.product_id?.name}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <Typography>{product?.product_id?.name}</Typography>
                    {/* <Typography sx={{ textAlign: "center", maxWidth: "150px" }}>
                      {product.product_id.desc}
                    </Typography> */}
                    <Typography
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Button
                        onClick={() => decrementQty(product._id, product.qty)}
                      >
                        <Remove />
                      </Button>
                      Qty:{product.qty}
                      <Button
                        onClick={() => incrementQty(product._id, product.qty)}
                      >
                        <Add />
                      </Button>
                    </Typography>

                    <Typography>${product?.product_id?.price}</Typography>
                    <Button
                      title="remove"
                      onClick={() => removeItem(product.product_id._id)}
                      sx={{ backgroundColor: "#FF0000", color: "black" }}
                    >
                      remove
                    </Button>
                  </Box>
                </Card>
              ))}
            </Box>
            <Box sx={{ width: "100%" }}>
              {/* Subtotal and Checkout */}
              <Card
                elevation={6}
                sx={{
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.0rem",
                  p: 2,
                  m: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                    alignItems: "baseline",
                  }}
                >
                  <TextField
                    id="standard-basic"
                    label="Enter Promocode"
                    variant="standard"
                  />
                  <Button title="submit">Submit</Button>
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>Estimated Total</Typography>
                    <Typography>${calculateSubtotal()}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>Shipping Charge</Typography>
                    <Typography>$ 100</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography gutterBottom>SubTotal:</Typography>
                  <Typography gutterBottom>
                    ${calculateSubtotal() + 100}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleCheckout()}
                >
                  Checkout
                </Button>
              </Card>
            </Box>
          </Box>
        </Container>
      )}
    </div>
  );
};
export default CartPage;
