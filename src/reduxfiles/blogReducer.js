import {
  FETCH_BLOG,
  ADD_BLOG,
  DELETE_BLOG,
  FETCH_ALL_BLOG,
  SET_SEARCH,
} from "./blogType";

const initialState = {
  sitename: "BlogS-site",
  blogsList: [],
  isBlogFetched: false,
  query: "",
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      if (action.payload.blog === "") {
        return {
          ...state,
          query: state.blogsList.filter((blog) =>
            blog.title.toLowerCase().includes(action.payload.blog.toLowerCase())
          ),
        };
      }
      return {
        ...state,
        query: action.payload.blog,
        blogsList: state.blogsList.filter((blog) =>
          blog.title.toLowerCase().includes(action.payload.blog.toLowerCase())
        ),
      };
    case FETCH_ALL_BLOG:
      return {
        ...state, //=>{ sitename:"BlogS-site",blogsList:[]}
        blogsList: action.payload.blogs, //blogList:[{},{},{},...]
        isBlogFetched: true,
      };
    case ADD_BLOG:
      return {
        ...state,
        //state.blogsList =>[{},{}]]
        //action.payload.blog => {id:1,title:"something",body:"something"}
        //blogsList: [...state.blogsList, action.payload.blog]=>[{},{},{id:1,title:"something",body:"something"}]
        blogsList: [action.payload.blog, ...state.blogsList],
      };
    case DELETE_BLOG:
      return {
        ...state,
        blogsList: state.blogsList.filter((singleBlog) => {
          return singleBlog.id != action.payload.blogId;
        }),
      };
    default:
      return state;
  }
};

export default blogReducer;
