import { Box, css } from "@mui/material";
import React from "react";
import ContactPage from "../components/contact";
import styled from "@emotion/styled";
import image from "../assets/images/contact.jpeg";

const Contact = () => {
  const ContactBox = styled(Box)(
    ({ theme }) => css`
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
      background-image: url(${image});
      background-size: cover;
      background-position: center;
      height: 100vh;
    `
  );

  return (
    <ContactBox>
      <Box sx={{ maxWidth: "300px" }}>
        <h3>
          Talk with our sales team Fill out your information and our
          representative will reach out to you. Have a simple question? Check
          out our FAQ.
        </h3>
      </Box>
      <ContactPage />
    </ContactBox>
  );
};

export default Contact;
