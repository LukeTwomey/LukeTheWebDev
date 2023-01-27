import React from "react";
import { useParams } from "react-router-dom";

export const Post = () => {
  const params = useParams();
  const title = params.postTitle;
  console.log(title);

  return (
    <main>
      <h1>Blog Post here</h1>
      <p>content......</p>
      <p>Lorem ipsum and all that jazz...</p>
      <p>
        Five genuinely enjoyable years later, I jumped at the opportunity to
        explore more of the world, backpacking for a year. Aside from countless
        incredible experiences, this gave me ample opportunity to choose an
        exciting new career path.
      </p>
      <p>
        Five genuinely enjoyable years later, I jumped at the opportunity to
        explore more of the world, backpacking for a year. Aside from countless
        incredible experiences, this gave me ample opportunity to choose an
        exciting new career path.
      </p>
      <p>
        Five genuinely enjoyable years later, I jumped at the opportunity to
        explore more of the world, backpacking for a year. Aside from countless
        incredible experiences, this gave me ample opportunity to choose an
        exciting new career path.
      </p>
    </main>
  );
};
