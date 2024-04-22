import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h4"
              component="h1"
              sx={{ flexGrow: 1 }}
              fontWeight="bold"
              flex={1}
            >
              My Blog
            </Typography>
            <MenuBookTwoToneIcon fontSize="large" />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Header;
