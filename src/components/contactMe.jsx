import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { css } from "@emotion/react";

const ContactPageWrapper = styled(Box)(
  ({ theme }) => css`
    padding: 20px;
    
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
    background-color: #f0fff4;
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
      <ContactFormTitle>Fill the to contact us</ContactFormTitle>
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

const ContactMe = () => {
  return (
    <ContactPageWrapper>
      <ContactForm />
    </ContactPageWrapper>
  );
};

export default ContactMe;
