import { useSelector } from "react-redux";
import { selectAllUsers } from "../Users/usersSlice";

import React from 'react'

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    // ensure types match (some places may pass userId as a string)
    const searchId = typeof userId === 'string' ? Number(userId) : userId;
    const author = users.find(user => user.id === searchId || user.id === userId);

    return (
        <span>by {author ? author.name : 'Unknown Author'}</span>
    )
}

export default PostAuthor