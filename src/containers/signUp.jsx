import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { api } from "../api";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Copyright from "../components/copyright";
import { enqueueSnackbar } from "notistack";

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = new FormData(event.currentTarget);
    console.log(userData);

    const firstName = userData.get("firstName");
    const lastName = userData.get("lastName");
    const email = userData.get("email");
    const password = userData.get("password");
    if (!firstName) {
      setFirstNameError("First Name is required.");
    } else {
      setFirstNameError(false);
    }
    if (!lastName) {
      setLastNameError("Last Name is required.");
    } else {
      setLastNameError(false);
    }
    if (!email) {
      setEmailError("Email is required.");
    } else if (!email.includes("@")) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError(false);
    }
    if (!password) {
      setPasswordError("Password is required.");
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else {
      setPasswordError(false);
    }

    if (firstName && lastName && email && password) {
      const values = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };

      try {
        const response = await api.auth.register(values);
        console.log(response.data);
        enqueueSnackbar("Registeration successfull", { variant: "success" });
        navigate("/signin");
      } catch (error) {
        console.log(error);
        setEmailError("email is alredy registered");
      }
    }
  };
  const handleFirstNameChange = (event) => {
    if (!event.target.value) {
      setFirstNameError("Please enter your first name");
    } else {
      setFirstNameError("");
    }
  };
  const handleLastNameChange = (event) => {
    if (!event.target.value) {
      setLastNameError("Please enter your Last name");
    } else {
      setLastNameError("");
    }
  };
  const handleEmailChange = (event) => {
    if (!event.target.value) {
      setEmailError("Please enter your Email");
    } else if (!event.target.value.includes("@")) {
      setEmailError("invalid email format");
    } else {
      setEmailError("");
    }
  };
  const handlePasswordChange = (event) => {
    if (event.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else if (!event.target.value) {
      setPasswordError("Password is required.");
    } else {
      setPasswordError(false);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component={"h1"} variant="h5">
              Sign up
            </Typography>

            <Box
              onSubmit={handleSubmit}
              component={"form"}
              noValidate
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    onChange={handleFirstNameChange}
                    fullWidth
                    id="firstName"
                    label="First Name"
                    error={Boolean(firstNameError)}
                    helperText={firstNameError}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    onChange={handleLastNameChange}
                    autoComplete="family-name"
                    error={Boolean(lastNameError)}
                    helperText={lastNameError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleEmailChange}
                    error={Boolean(emailError)}
                    helperText={emailError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    onChange={handlePasswordChange}
                    id="password"
                    autoComplete="new-password"
                    error={Boolean(passwordError)}
                    helperText={passwordError}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <Link color="inherit">Sign Up</Link>
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Typography to="/signin" component={NavLink}>
                    Already have an account? Sign in
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </div>
    </ThemeProvider>
  );
}
