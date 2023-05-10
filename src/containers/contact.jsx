import { Box } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import ContactPage from "../components/contactCard";

const ContactBox = styled(Box)`
  background: linear-gradient(to bottom, #cc2b5e, #753a88);
`;

const Contact = () => {
  return (
    <ContactBox
      sx={{
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "stretch" },
        height: { xs: "auto", md: "auto", xl: "70vh" },
        display: "flex",
        justifyContent: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
        margin: "auto", // center horizontally and vertically
      }}
    >
      <Box
        sx={{
          flex: 1,
          maxWidth: "800px",
          width: "100%",
          mx: 10,
          px: { xs: 2, md: 4 },
          my: { xs: 2, md: 4, xl: 10 },
        }}
      >
        <ContactPage />
      </Box>
    </ContactBox>
  );
};

export default Contact;
