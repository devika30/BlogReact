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
import NotFound from "./components/pages/NotFound";
import Help from "./components/pages/Help";
import { BlogList } from "./components/pages/BlogList";
import { SingleBlog } from "./components/pages/SingleBlog";
import { blogsLoader } from "./components/pages/BlogList";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index path="/" element={<HomePage />} />
      <Route path="create" element={<CreateBlog />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<Help />} />
      <Route path="blog" element={<BlogList />} loader={blogsLoader} />
      <Route path=":id" element={<SingleBlog />}/>
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
