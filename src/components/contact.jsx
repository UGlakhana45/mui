import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { css } from "@emotion/react";

const ContactPageWrapper = styled(Box)(
  ({ theme }) => css`
    padding: 20px;
    background: linear-gradient(120deg, #a1c4fd, #c2e9fb);
    max-width: 500px;
    border-radius: 15px;
    width:100%;
  `
);

const ContactFormWrapper = styled(Box)(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

    ${theme.breakpoints.up("sm")} {
      max-width: 500px;
    }
  `
);

const ContactFormTitle = styled(Typography)(
  ({ theme }) => css`
    color: #6f52ed;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 24px;
  `
);

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <ContactFormWrapper>
      <ContactFormTitle>Contact Me</ContactFormTitle>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          label="Message"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </ContactFormWrapper>
  );
};

const ContactPage = () => {
  return (
    <ContactPageWrapper>
      <ContactForm />
    </ContactPageWrapper>
  );
};

export default ContactPage;
