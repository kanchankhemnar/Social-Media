import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./components/CreatePost.jsx";
import { PostList } from "./store/Post-list-store.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);
