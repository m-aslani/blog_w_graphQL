import CardEL from "../shared/CardEL"
import sanitizeHtml from "sanitize-html";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import Loader from "../shared/Loader";

function AuthorPage() {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader/>;
  if (errors) return <h4>error!!!</h4>;

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar
            src={data.author.avatar.url}
            sx={{ width: 250, height: 250 }}
          />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {data.author.name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {data.author.field}
          </Typography>
        </Grid>
        <Grid item xs={12} dir="ltr">
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.author.description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6} dir="ltr">
          <Typography component="h3" variant="h5" fontWeight={500} mb={2}>
            {data.author.name}'s Blogs:
          </Typography>
          <Grid container spacing={2}>
            {data.author.posts.map(post=>(
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEL title={post.title} slug={post.slug} cover={post.cover}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
