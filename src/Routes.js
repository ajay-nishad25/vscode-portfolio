import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Layout from "Layout/Layout";
import File from "pages/File";
import Search from "pages/Search";
import Git from "pages/Git";
import Debug from "pages/Debug";
import Extension from "pages/Extension";

function Routes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Navigate to="file" replace />,
        },
        {
          path: "file",
          element: <File />,
        },
        { path: "search", element: <Search /> },
        { path: "git", element: <Git /> },
        { path: "debug", element: <Debug /> },
        { path: "extension", element: <Extension /> },
      ],
    },
  ]);

  return routes;
}

export default Routes;
