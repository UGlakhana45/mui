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
      <Paper style={{ padding: "1rem" }}>
        <Avatar
          alt="User Avatar"
          src="https://picsum.photos/150"
          style={{ width: "150px", height: "150px" }}
        />
        <div style={{ marginLeft: "1rem" }}>
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
      <Paper style={{ marginTop: "1rem", padding: "1rem" }}>
        <Typography variant="h6" style={{ marginBottom: "1rem" }}>
          Recent Orders
        </Typography>
      </Paper>
    </Container>
  );
};
export default Profile;
