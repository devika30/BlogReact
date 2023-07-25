import { FETCH_BLOG, ADD_BLOG, DELETE_BLOG } from "./blogType";

export const fetch_blog = (blogId) => {
  return {
    type: FETCH_BLOG,
    payload: { blogId },
  };
};

export const add_blog = (blogTitle, blogBody) => {
  return {
    type: ADD_BLOG,
    payload: {
      blogTitle,
      blogBody,
    },
  };
};


export const delete_blog=(blogId)=>{
    return{
        type:DELETE_BLOG,
        payload:{
            blogId
        }
    }
}
