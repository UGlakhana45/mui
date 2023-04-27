import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import CustomButton from "../../components/CustomButton";

function HomeAppliances() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API and update the state
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <Grid container spacing={5} sx={{ paddingTop: 10 }}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card sx={{ height: "100%" }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography variant="h5" component="h2" gutterBottom>
                  {post.title}
                </Typography>

                <Typography variant="body1" component="p" align="center">
                  {post.body}
                </Typography>

                <CustomButton>Read More</CustomButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomeAppliances;

