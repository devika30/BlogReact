import {
  FETCH_BLOG,
  ADD_BLOG,
  DELETE_BLOG,
  FETCH_ALL_BLOG,
  SET_SEARCH,
} from "./blogType";
import axios from "axios";

export const fetchBlogs = () => {
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch(fetch_all_blogs_success(response.data));
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
};

//action to fetch all blogs
export const fetch_all_blogs_success = (allBlogs) => {
  return {
    type: FETCH_ALL_BLOG,
    payload: {
      blogs: allBlogs,
    },
  };
};

export const add_blog = (blog) => {
  return {
    type: ADD_BLOG,
    payload: {
      blog: blog,
    },
  };
};

export const delete_blog = (blogId) => {
  return {
    type: DELETE_BLOG,
    payload: {
      blogId,
    },
  };
};

//to get searched blogs
export const fetch_search_blogs = (searchedblogs) => {
  return {
    type: SET_SEARCH,
    payload: {
      blog: searchedblogs,
    },
  };
};
