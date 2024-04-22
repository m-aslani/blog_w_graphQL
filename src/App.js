import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Index from "./components/layouts/Index";
import BlogPage from "./components/blog/BlogPage";
import AuthorPage from "./components/author/AuthorPage";

function App() {
  return (
    <Index>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/* <Route path="/blog" element={<HomePage/>}/>
        <Route path="/author" element={<HomePage/>}/> */}
        <Route path="/blogs/:slug" element={<BlogPage/>}/>
        <Route path="/authors/:slug" element={<AuthorPage/>}/>
      </Routes>
    </Index>
  );
}

export default App;
