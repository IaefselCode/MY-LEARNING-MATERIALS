import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";

import { selectAllUsers } from "../Users/usersSlice";
import React from "react";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onUserChange = (e) => setUserId(e.target.value);

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  //Creating the UserOptions menu
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  //Other Validation Of Dissabling the Save Post Button
  // allow userId = 0 (falsy) so test against empty string instead
  // const canSave = Boolean(title) && Boolean(content) && Boolean(userId); // <<<---  Here
  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";
  //Handling Add Post
  const handleAddPost = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(
          addNewPost({
            title,
            body: content,
            userId,
            // id will be added by the server
          })
        ).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
      } catch (err) {
        console.error("Failed to save the post: ", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <div>
      {/* Navigation */}
      <div>
        <Link to={"/"}>
          <button>Posts</button>
        </Link>
        <Link to={"/add"}>
          <button>Add Post</button>
        </Link>
      </div>

      {/* Adding Posts */}
      <h2>Add New Post</h2>
      <form action="" className="card">
        {/* <label htmlFor="postTitle">  Post Title:</label> */}
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
          placeholder="Post Title:"
        />
        <br />

        {/* <label htmlFor="postContent">  Post Content:</label> */}
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChange}
          placeholder="Post Content:"
        ></textarea>
        <br />
        {/* <input type="text" id="postContent" name="postContent" value={content} onChange={onContentChange} placeholder="Post Content:" /><br /> */}

        {/* <label htmlFor="postAuthor">Author: </label> */}
        <select
          name="postAuthor"
          id="postAuthor"
          value={userId}
          onChange={onUserChange}
        >
          <option value="">Author:</option>
          {userOptions}
        </select>
        <br />
        <button type="button" onClick={handleAddPost} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
