import { createContext, useReducer } from "react";
//we are creating and writing state handling functions into context providers to separate Logic from design
//i.e let App.jsx only focus on UI and final rendering and let Context Provider handle state changes and functions of components

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  // addInitialPosts: ()=>{},
});



const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
     newPostList = [action.payload,...currPostList
    ];
  }
  // else if(action.type ===  "ADD_INITIAL_POST"){
  //   newPostList=action.payload.posts;
  // }
  return newPostList;
};

const PostListContextProvider = ({ children }) => {

  const addPost = (title,body,reactions,tags) => {
    console.log(`${title} ${body}`)
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id:Date.now(),
        title,
        body,
        reactions,
        tags
      },
    });
  };

  // const addInitialPosts = (posts) => {
  //   dispatchPostList({
  //     type: "ADD_INITIAL_POST",
  //     payload: {
  //       posts
  //     },
  //   });
  // };


  const deletePost = (postId) => {
    console.log("to delete ", postId);
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
   [{
    id: Date.now(),
    title:"Love life",
    body:"Be happy in your life,let nothing divert you.",
    reactions:5,
    tags:["love","happy"],
  },
  {
    id: Date.now() + 1,
    title:"Study hard",
    body:"Even you don't have exams tmrw,just turn on lamp and study.",
    reactions:10,
    tags:["study","motivation"],
  },]
  );

  return (
    <>
      <PostList.Provider
        value={{
          postList,
          addPost,
          deletePost,
          // addInitialPosts,
        }}
      >
        {children}
      </PostList.Provider>
    </>
  );
};
export default PostListContextProvider;
