import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            About
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
        </div>
    )
}

export default About