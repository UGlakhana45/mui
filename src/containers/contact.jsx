import { Box } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import ContactPage from "../components/contactCard";
import ContactMe from "../components/contactMe";

const ContactBox = styled(Box)`
  background: linear-gradient(to bottom, #cc2b5e, #753a88);
`;

const Contact = () => {
  return (
    <ContactBox
      sx={{
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "stretch" },
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{ flex: 1, maxWidth: "800px", mx: "auto", px: { xs: 2, md: 4 } }}
      m={20}>
        <ContactPage />
      </Box>
      <Box
        sx={{ flex: 1, maxWidth: "400px", mx: "auto", px: { xs: 2, md: 4 } }}
      m={20}>
        <ContactMe />
      </Box>
    </ContactBox>
  );
};

export default Contact;
