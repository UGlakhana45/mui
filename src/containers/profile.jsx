import React, { useEffect } from "react";
import {
  Container,
  Paper,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { FavoriteBorder, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { profileData } from "../redux/reducers/profileSlice";

const profileContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "5px",
  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  marginBottom: "30px",
  "@media (min-width: 600px)": {
    flexDirection: "row",
    padding: "30px",
  },
};

const avatarStyle = {
  width: "150px",
  height: "150px",
  marginBottom: "20px",
  "@media (min-width: 600px)": {
    marginRight: "50px",
    marginBottom: "0px",
  },
};

const userInfoStyle = {
  textAlign: "center",
  "@media (min-width: 600px)": {
    textAlign: "left",
  },
};

const ordersContainerStyle = {
  margin: "20px 0",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "5px",
  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
};

const orderHeaderStyle = {
  fontWeight: "bold",
  marginBottom: "10px",
};

const orderItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 0",
  borderBottom: "1px solid #ccc",
};

const orderItemNameStyle = {
  fontWeight: "bold",
};

const orderItemPriceStyle = {
  color: "#9e9e9e",
};

const favoritesContainerStyle = {
  margin: "20px 0",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "5px",
  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
};

const favoritesHeaderStyle = {
  fontWeight: "bold",
  marginBottom: "10px",
};

const favoriteItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 0",
  borderBottom: "1px solid #ccc",
};

const favoriteItemNameStyle = {
  fontWeight: "bold",
};

const favoriteItemPriceStyle = {
  color: "#9e9e9e",
};

const Profile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.profile);
  console.log(data);
  const apicalling = async () => {
    dispatch(profileData());
  };

  useEffect(() => {
    apicalling();
  }, []);

  return (
    <Container style={{ marginTop: "1rem" }}>
      <Paper style={profileContainerStyle}>
        <Avatar
          alt="User Avatar"
          src="https://picsum.photos/150"
          style={avatarStyle}
        />
        <div style={userInfoStyle}>
          <Typography variant="h5">
            {data.userdata.firstName} {data.userdata.lastName}
          </Typography>
          <Typography variant="body1">{data.userdata.email}</Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "20px" }}
          >
            Edit Profile
          </Button>
        </div>
      </Paper>
      <Paper style={ordersContainerStyle}>
        <Typography variant="h6" style={orderHeaderStyle}>
          Recent Orders
        </Typography>
        <List>
          <ListItem style={orderItemStyle}>
            <ListItemText
              primary="Product 1"
              secondary="$10"
              style={orderItemNameStyle}
            />
            <IconButton color="secondary" aria-label="Delete">
              <Delete />
            </IconButton>
          </ListItem>
          <ListItem style={orderItemStyle}>
            <ListItemText
              primary="Product 2"
              secondary="$20"
              style={orderItemNameStyle}
            />
            <IconButton color="secondary" aria-label="Delete">
              <Delete />
            </IconButton>
          </ListItem>
          <ListItem style={orderItemStyle}>
            <ListItemText
              primary="Product 3"
              secondary="$15"
              style={orderItemNameStyle}
            />
            <IconButton color="secondary" aria-label="Delete">
              <Delete />
            </IconButton>
          </ListItem>
        </List>
      </Paper>
      <Paper style={favoritesContainerStyle}>
        <Typography variant="h6" style={favoritesHeaderStyle}>
          Favorite Products
        </Typography>
        <List>
          <ListItem style={favoriteItemStyle}>
            <ListItemText
              primary="Product 1"
              secondary="$10"
              style={favoriteItemNameStyle}
            />
            <IconButton color="primary" aria-label="Favorite">
              <FavoriteBorder />
            </IconButton>
          </ListItem>
          <ListItem style={favoriteItemStyle}>
            <ListItemText
              primary="Product 2"
              secondary="$20"
              style={favoriteItemNameStyle}
            />
            <IconButton color="primary" aria-label="Favorite">
              <FavoriteBorder />
            </IconButton>
          </ListItem>
          <ListItem style={favoriteItemStyle}>
            <ListItemText
              primary="Product 3"
              secondary="$15"
              style={favoriteItemNameStyle}
            />
            <IconButton color="primary" aria-label="Favorite">
              <FavoriteBorder />
            </IconButton>
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};
export default Profile;
