import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

// Pages
import AddPostForm from "../features/posts/AddPostForm";
import NotFoundPage from "../features/NotFoundPage";
import Layout from "../components/Layout";
import PostsList from "../features/posts/PostsList";
import SinglePostPage from "../features/posts/SinglePostPage";
import EditPostForm from "../features/posts/EditPostForm";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <PostsList />,
        },
        {
          path: "post",
          children: [
            {
              index: true,
              element: <AddPostForm />,
            },
            {
              path: ":postId",
              element: <SinglePostPage />,
            },
            {
              path: "edit/:postId",
              element: <EditPostForm />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}/>;
};

export default Routes;
