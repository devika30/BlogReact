import logo from "./logo.svg";
import "./App.css";
import CreateBlog from "./components/pages/CreateBlog";
import { Provider } from "react-redux";
import blogStore from "./reduxfiles/blogStore";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import RootLayout from "./components/layouts/RootLayout";
import About from "./components/pages/About";
import HelpLayout from "./components/layouts/HelpLayout";
import Contact from "./components/pages/help/Contact";
import Faq from "./components/pages/help/Faq";
import NotFound from "./components/pages/NotFound";
import { BlogList } from "./components/pages/BlogList";
import { SingleBlog } from "./components/pages/SingleBlog";
import { blogsLoader } from "./components/pages/BlogList";
import { singleBlogLoader } from "./components/pages/SingleBlog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index path="/" element={<HomePage />} />
      <Route path="create" element={<CreateBlog />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
      </Route>
      <Route  path="blog" element={<BlogList />} loader={blogsLoader} />
      <Route path=":id" element={<SingleBlog />} loader={singleBlogLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <Provider store={blogStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
