// ...existing code...
import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
  return (
    <article className="card">
      <h2>
        <u>
          <b>{post.title}</b>
        </u>
      </h2>
      {/* Here we are referencing either post.content or post.body to avoid issues with missing content property from API */}
      {/* Our Api Reads body but our local state reads content */}
      <p>{(post.content || post.body || "").substring(0, 200)}</p>
      {/* <p>{post.content.substring(0, 200)}</p> */}
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date}></TimeAgo>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;
// ...existing code...