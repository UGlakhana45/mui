import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      padding={2}
      {...props}
    >
      {" © "}
      {new Date().getFullYear()}{" "}
      <Link
        color="inherit"
        to="mui-theta.vercel.app"
        target="blank"
      >
        Your Shopping Site Pvt.Ltd.
      </Link>{" "}
      {"."}
    </Typography>
  );
}
export default Copyright;
