import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutations";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });

  const sendCommentHandler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      toast.warn("Please fill the inputs ⚠", { position: "top-center" });
    }
  };

  if(data){
    toast.success("Your message will be displayed after confirmation 💚",{position:"top-center"})
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2} dir="ltr">
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          Send Comment
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="User Name"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="E-mail"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          multiline
          minRows={4}
          label="Text"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button disabled variant="contained" sx={{ width: "100%" }}>
            <Typography component="p" variant="h6" fontWeight={500}>
              Sending...
            </Typography>
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={sendCommentHandler}
          >
            <Typography component="p" variant="h6" fontWeight={500}>
              Send
            </Typography>
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
