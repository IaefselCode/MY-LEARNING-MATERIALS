import { useSelector } from "react-redux";
// import React, { useState } from "react";
import { selectAllPosts, getPostsStatus, getPostsError } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";
import { ReactTyped } from "react-typed";
const PostsList = () => {
  // const dispatch = useDispatch();

  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  const posts = useSelector(selectAllPosts);

  // useEffect(() => {
  //   if (postsStatus === "idle") {
  //     dispatch(fetchPosts());
  //   }
  // }, [postsStatus, dispatch]);

  // Rendering the Posts accordingly
  let content;
  if (postsStatus === "loading") {
    content = (
      <div>
        <div className="sk-chase m-12">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
        <p>
          loading{""}
          <ReactTyped
            typeSpeed={30}
            backSpeed={30}
            loop
            strings={["....", "....", "...."]}
          />
        </p>
      </div>
    );
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p className="text-red-500">{error}</p>;
  }
  //

  return (
    <div>
      {/* <h2 className="text-3xl">Posts</h2> */}
      {content}
    </div>
  );
};

export default PostsList;

// so here the selector receives the state and then we get state.posts but what if our state changed right now we need to know that
// if it could be state.posts.something else
// so it would be better if we create a selector in the slice so in that way if the shape of the state ever changes
// we wouldn't have to change each component but we could just change it once in a slice
