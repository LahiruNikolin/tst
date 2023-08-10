import "./App.css";

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/IndexPage";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/Posts/Create";
import Post from "./pages/Posts/View";
import Posts from "./pages/Posts";
import EditPost from "./pages/EditPost";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/post/create/" element={<CreatePost />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/view/:id" element={<Post />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
