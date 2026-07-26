import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPostById, updatePost, deletePost } from "./postsSlice";
import { useParams, useNavigate } from "react-router-dom";

import { selectAllUsers } from "../Users/usersSlice";

const EditPostForm = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  // const post = useSelector((state) => selectPostById(state, postId));
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || post?.body || "");
  const [userId, setUserId] = useState(post?.userId || "");
  const [requestStatus, setRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  // Update form fields when post changes
  useEffect(() => {
    if (post) {
      setTitle(post.title || "");
      setContent(post.content || post.body || "");
      setUserId(post.userId || "");
    }
  }, [post]);

  if (!post) {
    return (
      <section>
        <h2 className="text-red-500">Post not found!</h2>
      </section>
    );
  }

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(Number(e.target.value));

  const canSave =
    [title, content, userId].every(Boolean) && requestStatus === "idle";

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setRequestStatus("pending");
        //Note we are not going to dispatch the date because when the post is first created we are pulling in the
        //information from our fake API and then when we do that we are adding a new post to our state   we were adding in the
        //reactions and the date because they didn't previously exist in an API so its just something we did to addopt

        //But Now that we are updating the post we need to include all the info we have except for the date because we will set a new date
        //And then there is unwrap() which helps us to catch an error  and lets us go to the catch block if an error happens
        await dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId: Number(userId),
            reactions: post.reactions,
          })
        ).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/post/${postId}`); //useNavigate hook from react router helps to redirect us to the other page so here after we edit post we are going to be redirected to singlepostpage with the id
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setRequestStatus("idle");
      }
    }
  };

  const onDeletePostClicked = () => {
    try {
      setRequestStatus("pending");
      dispatch(deletePost({ id: post.id })).unwrap();

      setTitle("");
      setContent("");
      setUserId("");
      navigate("/");
    } catch (err) {
      console.error("Failed to delete the post", err);
    } finally {
      setRequestStatus("idle");
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <form className="p-4 m-2 border-1 border-solid border-white rounded-[15px] shadow-lg shadow-white sm:w-sm w-[100%]">
        <h2 className="text-3xl p-2">Edit Post</h2>

        <label htmlFor="postTitle">Post Title:</label>
        <br />
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <br />
        <label htmlFor="postAuthor">Author:</label>
        <br />
        <select
          name=""
          id="postAuthor"
          value={userId}
          onChange={onAuthorChanged}
        >
          <option value="">Author:</option>
          {usersOptions}
        </select>
        <br />
        <label htmlFor="postContent">Content:</label>
        <br />
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <br />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>

        <button type="button" onClick={onDeletePostClicked} disabled={!canSave}>
          Delete Post
        </button>
      </form>
    </section>
  );
};

export default EditPostForm;
