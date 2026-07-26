import React from "react";
import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { useParams, Link } from "react-router-dom";
import { selectAllPosts, selectPostsByUser } from "../posts/postsSlice";

const UserPage = () => {
  const { userId } = useParams(); //Here we are grabbing the UserId out of URL and we will wrap it into number when we pass it in to a selector
  const user = useSelector((state) => selectUserById(state, Number(userId))); //The 'state' It is automatically provided by Redux when you use the selector
  //Here how we get user we are calling useSelector and it Receives the state and the UserId which must be wraped in number

//Did not client re-render because we are using the same selector and we are not passing in the userId as a dependency
  // const posts = useSelector(selectAllPosts);//Here we select all the posts and we filter the posts of the user by his UserId
  // // Filter posts by this user
  // const userPosts = posts.filter(
  //   (post) => post.userId === Number(userId) || String(post.userId) === String(userId)
  // );


  //it client re-renderd
  // const userPosts = useSelector(state => {
  //   const posts = selectAllPosts(state);
  //   return posts.filter(post => post.userId === Number(userId) || String(post.userId) === String(userId));
  // });

  
  //Did not client re-render
  const userPosts = useSelector(state => selectPostsByUser(state, Number(userId))) //But here we are using useSelector Again Passing in the state and we are using the new memorized selector we created "selectPostByUser" it gets the state and the userId and then it returns the posts that are by the user

  if (!user) {
    return (
      <section>
        <h2 className="text-red-500">User not found!</h2><br />
        <Link className="text-blue-600" to="/users">
          Back to Users
        </Link>
      </section>
    );
  }


  return (
    <section>
      <article className="card">
        <h2>
          <u>
            <b>{user.name}</b>
          </u>
        </h2>
        {user.username && <p><strong>Username:</strong> {user.username}</p>}
        {user.email && <p><strong>Email:</strong> {user.email}</p>}
        {user.phone && <p><strong>Phone:</strong> {user.phone}</p>}
        {user.website && <p><strong>Website:</strong> {user.website}</p>}
        {user.company && (
          <p><strong>Company:</strong> {user.company.name || user.company}</p>
        )}
        {user.address && (
          <p>
            <strong>Address:</strong> {user.address.street || user.address}, {user.address.city || ""}, {user.address.zipcode || ""}
          </p>
        )}
        <Link className="text-blue-600" to="/users">
          Back to Users
        </Link>
      </article>

      {userPosts.length > 0 && (
        <div className="mt-4">
          <h3 className="text-2xl mb-4">Posts by {user.name}</h3>
          {userPosts.map((post) => (
            <article key={post.id} className="card">
              <h3>
                <u>
                  <b>{post.title}</b>
                </u>
              </h3>
              <p className="excerpt">
                {(post.content || post.body || "").substring(0, 100)}...
              </p>
              <Link className="text-blue-600" to={`/post/${post.id}`}>
                View Post
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default UserPage;

