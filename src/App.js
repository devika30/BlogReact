import "./App.css";
// import CreateBlog from "./components/pages/CreateBlog";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import RootLayout from "./components/layouts/RootLayout";
// import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Help from "./components/pages/Help";
import { BlogList } from "./components/pages/BlogList";
import { SingleBlog } from "./components/pages/SingleBlog";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useDispatch, useSelector } from "react-redux";
import React, { lazy,Suspense,useEffect } from "react";
import { fetchBlogs } from "./reduxfiles/blogActions";

//dynamic import 
const CreateBlog=lazy(()=>import("./components/pages/CreateBlog"))
const About=lazy(()=>import("./components/pages/About"))
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index path="/" element={<HomePage />} />
      <Route path="create" element={<CreateBlog />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />} />
      <Route path="blog" element={<BlogList />} />
      <Route path=":id" element={<SingleBlog />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  const { isBlogFetched, blogsList } = useSelector((state) => state);
  console.log("isBlogFetched before useEffect run", isBlogFetched);
  console.log("blogsList  before useEffect run", blogsList);
  console.log(!isBlogFetched && blogsList.length == 0);

  const dispatch = useDispatch();
  // the if conditions run only when the blog length is 0 i.e blogsList: [], once its get filled the useEffect wont run in order to not reload the page everytime we add new blog
  useEffect(() => {
    if (!isBlogFetched && blogsList.length == 0) {
      dispatch(fetchBlogs());
    }
  }, []);

  return <Suspense fallback={<h1>Loading</h1>}><RouterProvider router={router} /></Suspense>;
}

export default App;
