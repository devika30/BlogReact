import { FETCH_BLOG, ADD_BLOG, DELETE_BLOG } from "./blogType";

const initialState = {
  blogsList: [],
};

const generateRandomId = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 10;
  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOG:
      return {};
    case ADD_BLOG:
      return {
        blogsList: [
          ...state.blogsList,
          {
            id: generateRandomId(),
            title: action.payload.blogTitle,
            body: action.payload.blogBody,
          },
        ],
      };
    case DELETE_BLOG:
      return {
        blogsList: state.blogsList.filter((singleBlog) => {
          return singleBlog.id != action.payload.blogId;
        }),
      };
  }
};

export default blogReducer