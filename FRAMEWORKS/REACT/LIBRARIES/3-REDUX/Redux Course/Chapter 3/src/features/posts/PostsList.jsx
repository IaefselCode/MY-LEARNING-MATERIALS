import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const dispatch = useDispatch();

  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  // Rendering the Posts accordingly
  let content;
  if (postsStatus === "loading") {
    content = <p>"loading..."</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
      ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }
  //

  
  return (
    <div>
      <h2>Posts</h2>
      {content}
    </div>
  );
};

export default PostsList;

// so here the selector receives the state and then we get state.posts but what if our state changed right now we need to know that
// if it could be state.posts.something else
// so it would be better if we create a selector in the slice so in that way if the shape of the state ever changes
// we wouldn't have to change each component but we could just change it once in a slice
