import { useState, useEffect } from "react";
import { Grid, Card, Typography, Container, Box } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import axios from 'axios';

function HomeAppliances() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword',
      params: {
        keyword: 'Lego Star Wars',
        page: '1',
        sortBy: 'best_match'
      },
      headers: {
        'X-RapidAPI-Key': 'ebcb04f743msh12963dd6b37240dp15afabjsn0c54c2c52cad',
        'X-RapidAPI-Host': 'axesso-walmart-data-service.p.rapidapi.com'
      }
    };
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setPosts(response.data);
      console.log(response)
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
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
