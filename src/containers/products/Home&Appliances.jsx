import { useState, useEffect } from "react";
import { Grid, Card, Typography, Container, Box } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import { AxiosApi2 } from "../../api/axios";

function HomeAppliances() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const apiCalling = async () => {
    try {
      const response = await AxiosApi2.get("/posts");
      setPosts(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    apiCalling();
  }, []);

  return (
    <Container>
      {error !== "" ? (
        <Typography variant="h2" sx={{ color: "red", textAlign: "center" }}>
          {error}
        </Typography>
      ) : (
        <Grid container spacing={5} sx={{ paddingTop: 10 }}>
          {posts.slice(0,21).map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  p: 2,
                }}
              >
                <Box
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

                  <CustomButton>Read More</CustomButton>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default HomeAppliances;
