
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

const PostsExcerpt = ({ postId }) => {

  const post = useSelector(state => selectPostById(state , postId));
  
  return (
    <article className="card">
      <h2>
        <u>
          <b>{post.title}</b>
        </u>
      </h2>
      <p className="excerpt" >
        {(post.content || post.body || "").substring(0, 50)}...
      </p>
      <div>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date}></TimeAgo><br />
        <Link className="text-blue-600" to={`post/${post.id}`}>View Post</Link>
      </div>
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcerpt;



/*****OPTIMIZED USING REACT.MEMO */
// import React from "react";
// import PostAuthor from "./PostAuthor";
// import TimeAgo from "./TimeAgo";
// import ReactionButtons from "./ReactionButtons";
// import { Link } from "react-router-dom";

// let PostsExcerpt = ({ post }) => {
//   return (
//     <article className="card">
//       <h2>
//         <u>
//           <b>{post.title}</b>
//         </u>
//       </h2>
//       <p className="excerpt" >
//         {(post.content || post.body || "").substring(0, 50)}...
//       </p>
//       <div>
//         <PostAuthor userId={post.userId} />
//         <TimeAgo timestamp={post.date}></TimeAgo><br />
//         <Link className="text-blue-600" to={`post/${post.id}`}>View Post</Link>
//       </div>
//       <ReactionButtons post={post} />
//     </article>
//   );
// };
// PostsExcerpt = React.memo(PostsExcerpt);

// export default PostsExcerpt;