import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'


function Profilespage() {
    const profiles = [1, 2, 3, 4, 5];

    return (
        <div className='flex gap-2'>
            <div className='flex flex-col gap-2'>
                {profiles.map((profile) => (
                    <NavLink className={({ isActive }) => {return isActive ? 'text-gray-700' : '' }} key={profile} to={`/profiles/${profile}`}>
                        Profile {profile}
                    </NavLink>
                ))}
            </div>
            <Outlet />
        </div> 
    )
}

export default Profilespage
//Outlet this acts as a placeholder for any child route So the Child Route Cannot be Rendered Without The outlet function

//So am adding NavLink instead of Link because we want to see the current profile which is rendered in the ChildComponent Have the different styles 