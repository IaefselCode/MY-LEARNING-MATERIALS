// import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function Dashboard() {
    const dashboardItems = [
        { id: 1, title: "My Profile", },
        { id: 2, title: "My Projects", },
        { id: 3, title: "My Teams", },
    ];

    // const { id } = useParams();
    const userID = useParams();

    // const [users, setUser] = useState([]);

    // const [todos, setTodos] = useState([]);



    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    //         .then((response) => response.json())
    //         .then((data) => setUser(data))
    //         .catch((error) => console.error("Error fetching users:", error))
    // }, [id])

    return (
        <div>
            Dashboard
            <div>
                <Link to={"/"}><button>Home</button></Link>
                <Link to={"/menu"}><button>Menu</button></Link>
                <Link to={"/dashboard"}><button>Dashboard</button></Link>
                <Link to={"/about"}><button>About</button></Link>
                <Link to={"*"}><button>Not FoundPage</button></Link>
            </div>
            <br /><br />
            <div>
                <a href="/"><button>Home2</button></a>
                <a href="/menu"><button>Menu2</button></a>
                <a href="/dashboard"><button>Dashboard2</button></a>
                <a href="/about"><button>About2</button></a>
                <a href="*"><button>Not FoundPage2</button></a>
            </div>
            <ul>
                {
                    dashboardItems.map((item) => (
                        <li key={item.id}>
                            <Link to={`/dashboard/${item.id}`}>
                                <h2>{item.title}</h2>
                            </Link>
                        </li>
                    ))}
            </ul>
            {/* <h1>Dashboard Items{userID.id}</h1> */}


            {/* <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>
                            <Link to={`/dashboard/${user.id}`}>
                                <h2>{user.name}</h2>
                            </Link>
                        </li>
                    ))}
            </ul>

            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <h3>{todo.title}</h3>
                            <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
                        </li>
                    ))}
            </ul> */}

        </div>
    )
}

export default Dashboard

// Hera I have Import the useParams() Hook
// The useParams return an object Containing a Key Value pairs of the Dynamic Parameters form the Current URL
// This allows you to dynamically displa content based on the parameter value