// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit"
// import { postAdded } from "./postsSlice";

// import React from 'react'

// const AddPostForm = () => {
//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');

//     const onTitleChange = (e) => setTitle(e.target.value);
//     const onContentChange = (e) => setContent(e.target.value);

//     const dispatch = useDispatch()

//     //Handling Add Post
//     const handleAddPost = () => {
//         if (title && content) {
//             dispatch(
//                 postAdded({
//                     id: nanoid(),
//                     title,
//                     content,
//                 })
//             )
//             setTitle("")
//             setContent("")
//         } else {
//             alert("Please Add Post");
//         }
//     }

//     return (
//         <div>
//             {/* Navigation */}
//             <div>
//                 <h2>Navigation</h2>
//                 <Link to={"/"}><button>Posts</button></Link>
//                 <Link to={"/AddPostForm"}><button>Add Post</button></Link>
//             </div>

//             {/* Adding Posts */}
//             <h2>Add New Post</h2>
//             <form action="" className="card">
//                 {/* <label htmlFor="postTitle">  Post Title:</label> */}
//                 <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange} placeholder="Post Title:" /><br />

//                 {/* <label htmlFor="postContent">  Post Content:</label> */}
//                 <textarea name="postContent" id="postContent" value={content} onChange={onContentChange} placeholder="Post Content:"></textarea><br />
//                 <button type="button" onClick={handleAddPost}>Save Post</button>
//             </form>
//         </div>
//     )
// }

// export default AddPostForm


// Now The Form Above Works Propery but we need to could be better because now it needs to know the details about the state but we want it to send a propery formated object
//Because it will be good if we can abstract some of that,   we dont want to duplicate this logic to every component that posts to our global state 

//The Advantage Here Is our component doesent even have to know the structure of our state
// Eg Here 
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";

import { selectAllUsers } from "../Users/usersSlice";
import React from 'react'

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);
    const onUserChange = (e) => setUserId(e.target.value);

    const users = useSelector(selectAllUsers);

    const dispatch = useDispatch()

    //Creating the UserOptions menu
    const userOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
    
    //Other Validation Of Dissabling the Save Post Button
    // allow userId = 0 (falsy) so test against empty string instead
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId); // <<<---  Here

    //Handling Add Post
    const handleAddPost = () => {
        dispatch(
            postAdded(title, content, userId) // <<<---  Here   
            //The Benefit is that our component doesent even have to know the  structure of the state at all
            //It is now handled inside of the slice
        )
        setTitle("")
        setContent("")
        setUserId("")
    }

    return (
        <div>
            {/* Navigation */}
            <div>
                <Link to={"/"}><button>Posts</button></Link>
                <Link to={"/AddPostForm"}><button>Add Post</button></Link>
            </div>

            {/* Adding Posts */}
            <h2>Add New Post</h2>
            <form action="" className="card">
                {/* <label htmlFor="postTitle">  Post Title:</label> */}
                <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange} placeholder="Post Title:" /><br />

                {/* <label htmlFor="postContent">  Post Content:</label> */}
                <textarea name="postContent" id="postContent" value={content} onChange={onContentChange} placeholder="Post Content:"></textarea><br />
                {/* <input type="text" id="postContent" name="postContent" value={content} onChange={onContentChange} placeholder="Post Content:" /><br /> */}


                {/* <label htmlFor="postAuthor">Author: </label> */}
                <select name="postAuthor" id="postAuthor" value={userId} onChange={onUserChange} >
                    <option value="">Author:</option>
                    {userOptions}
                </select>

                <button type="button" onClick={handleAddPost} disabled={!canSave}>Save Post</button>


            </form>
        </div>
    )
}

export default AddPostForm