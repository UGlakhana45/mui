import { Box } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import ContactPage from "../components/contactCard";
import ContactMe from "../components/contactMe";
import { Counter } from "../redux/test";

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
      }}
    >
      <Box
        sx={{
          flex: 1,
          maxWidth: "800px",
          width:'100%',
          mx: 10, 
          px: { xs: 2, md: 4 },
          my: { xs: 2, md: 4, xl: 10 },
        }}
      >
        <ContactPage />
      </Box>
      <Box
        sx={{
          flex: 1,
          maxWidth: "400px",
          mx: "auto",
          px: { xs: 2, md: 4 },
          my: { xs: 2, md: 4, xl: 10 },
        }}
      >
        <ContactMe />
      </Box>
      <Counter />
    </ContactBox>
  );
};

export default Contact;
