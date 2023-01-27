import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export async function loader({ params }) {
  return import(`../projects/${params.projectName}.md`)
    .then((res) => fetch(res.default))
    .then((res) => res.text())
    .then((res) => {
      return res;
    });
}

export const Project = () => {
  const project = useLoaderData();

  return (
    <main className="project">
      <ReactMarkdown linkTarget="_blank">{project}</ReactMarkdown>
    </main>
  );
};
