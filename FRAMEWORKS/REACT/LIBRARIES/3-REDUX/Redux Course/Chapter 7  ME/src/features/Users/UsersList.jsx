import { useSelector } from "react-redux";
import { selectAllUsers, getUsersStatus, getUsersError } from "./usersSlice";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

const UsersList = () => {
  const users = useSelector(selectAllUsers);
  const usersStatus = useSelector(getUsersStatus);
  const error = useSelector(getUsersError);

  const renderedUsers = users?.map((user) => (
    <article
      key={user.id}
      className="flex flex-row justify-between items-center border-2 border-gray-300 rounded-md p-1 m-2"
    >
      <h2 className="text-2xl font-bold mr-3">{user.name}</h2>
      <Link className="text-blue-600" to={`/users/${user.id}`}>
        View User
      </Link>
    </article>
  ));


  // Rendering the Posts accordingly
  let content;
  if (usersStatus === "loading") {
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
  } else if (usersStatus === "succeeded") {
    content = renderedUsers;
  } else if (usersStatus === "failed") {
    content = <p className="text-red-500">{error}</p>;
  }

  

  return (
    <div>
      <h2 className="text-3xl mb-4">Users</h2>
      {content}
    </div>
  );
};

export default UsersList;
