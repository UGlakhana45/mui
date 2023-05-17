import React from "react";
import { Container, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";

const EmptyCartContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: theme.palette.common.white,
}));

const EmptyCart = () => {
  return (
    <EmptyCartContainer>
      <ShoppingCartIcon sx={{ fontSize: "6rem" }} />
      <Typography variant="h4" align="center" gutterBottom>
        Your cart is empty
      </Typography>
      <Typography variant="body1" align="center">
        Start adding items to your cart!
      </Typography>
    </EmptyCartContainer>
  );
};

export default EmptyCart;
