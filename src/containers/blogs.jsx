import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data from the NewsAPI and update the state
    fetch(
      "https://newsapi.org/v2/everything?q=fashion&sortBy=publishedAt&apiKey=YOUR_API_KEY"
    )
      .then((response) => response.json())
      .then((data) => setBlogs(data.articles))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Grid container spacing={2}>
      {blogs &&
        blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.url}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={blog.urlToImage}
                alt={blog.title}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {blog.title}
                </Typography>
                <Typography color="textSecondary">
                  {blog.description}
                </Typography>
                <Typography variant="body2" component="p">
                  {blog.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}

export default BlogList;