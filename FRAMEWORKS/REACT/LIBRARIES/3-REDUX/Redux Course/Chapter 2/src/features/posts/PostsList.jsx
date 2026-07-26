import { useSelector } from "react-redux";
import React, { useState } from "react";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  // const { post, setPost } = useState();
  //Solting the new post to be on top
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderPosts = orderedPosts.map((post) => (
    <article key={post.id} className="card">
      <h2>
        <u>
          <b>{post.title}</b>
        </u>
      </h2>
      <p>{post.content.substring(0, 200)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date}></TimeAgo>
      <ReactionButtons post={post} />
    </article>
  ));

  // // To save the users to local storage
  // const savePosts = () => {
  //   if (orderedPosts.length > 0) {
  //     localStorage.setItem("posts", JSON.stringify(orderedPosts));
  //     console.log("Post saved");
  //   }
  // };

  // // To retrieve the users from local storage
  // const retrievePosts = () => {
  //   const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  //   console.log(posts);
  // };

  return (
    <div>
      <h2>Posts</h2>
      {renderPosts}
      {/* {savePosts()} */}
      {/* {retrievePosts()} */}
    </div>
  );
};

export default PostsList;

// so here the selector receives the state and then we get state.posts but what if our state changed right now we need to know that
// if it could be state.posts.something else
// so it would be better if we create a selector in the slice so in that way if the shape of the state ever changes
// we wouldn't have to change each component but we could just change it once in a slice
