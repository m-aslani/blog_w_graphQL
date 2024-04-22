import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme.js";
import App from "./App.js";
import "./index.css";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
  // </React.StrictMode>,
);
