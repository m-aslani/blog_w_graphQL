import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
          light: '#f3e8f6',
          main: '#783396',
          dark: '#532765',
          contrastText: '#fff',
        },
        secondary: {
          light: '#f9ffc1',
          main: '#fbff41',
          dark: '#744f0f',
          contrastText: '#000',
        },
      },
      direction: "rtl",
})

export default theme