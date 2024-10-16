import React from "react";
import ReactDOM from "react-dom/client";
import Posts, {loader as postsLoader} from "./components/routes/Posts.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewPost, {action as newPostAction} from "./components/routes/NewPost.jsx";
import PostDetails, {loader as postDetailsLoader} from "./components/routes/PostDetails.jsx";
import RootLayout from "./components/routes/RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction
        },
        {path: '/:postId', element: <PostDetails />, loader: postDetailsLoader}
      ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
