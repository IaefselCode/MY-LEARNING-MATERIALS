import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SinglePostPage = () => {
  //retrieving the postId from the URL
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  // const post = useSelector((state) => selectPostById(state, postId));
  if (!post) {
    return (
      <section>
        <h2 className="text-red-500">Post not found!</h2>
      </section>
    );
  }

  return (
    <article className="card">
      <h2>
        <u>
          <b>{post.title}</b>
        </u>
      </h2>
      <p>{post.content || post.body}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
      <Link className="text-blue-600" to={`/post/edit/${post.id}`}>
        Edit Post
      </Link>
    </article>
  );
};

export default SinglePostPage;