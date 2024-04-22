import Loader from "../shared/Loader";
import sanitizeHtml from "sanitize-html";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/queries";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BlogPage() {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });

  const navigate = useNavigate();

  if (loading) return <Loader />;
  if (errors) return <h4>error!!!</h4>;
  return (
    <Container maxWidth="lg" >
      <Grid container padding={3} mt={3}>
        <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
            dir="ltr"
          >
            {data.post.title}
          </Typography>
          <ArrowBackIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.cover.url}
            alt={data.post.slug}
            width="100%"
            style={{ borderRadius: 15, maxHeight: "700px" }}
          />
        </Grid>
        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: "80px", height: "80px", marginLeft: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography
              component="p"
              variant="h6"
              fontWeight={300}
              color="text.secondary"
            >
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5} dir="ltr">
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.post.content.html),
            }}
          ></div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BlogPage;
