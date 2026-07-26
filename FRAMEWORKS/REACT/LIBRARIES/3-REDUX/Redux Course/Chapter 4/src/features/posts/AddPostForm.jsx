import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";

import { selectAllUsers } from "../Users/usersSlice";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onUserChange = (e) => setUserId(e.target.value);

  const navigate = useNavigate();

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
        navigate("/")
      } catch (err) {
        console.error("Failed to save the post: ", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <div>
      {/* Adding Posts */}
      <form action="" className="p-4 m-2 border-1 border-solid border-white rounded-[15px] shadow-lg shadow-white sm:w-sm w-[100%]">
      <h2 className="text-3xl p-2">Add New Post</h2>

        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
          placeholder="Post Title:"
        />
        <br />

        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChange}
          placeholder="Post Content:"
        ></textarea>
        <br />
        
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
