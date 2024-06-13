import React from 'react'
import { Link } from '@inertiajs/react';

const Layout = ({title,children,user}) => {
  return (
    <>
      <title>App - {title}</title>
        <div className="d-flex justify-content-end align-items-center px-sm-5 px-4 border-bottom" style={{height:"56px"}}>
          <div 
            className="d-flex" 
            data-bs-toggle="dropdown" 
            style={{cursor:"pointer"}}
          >
            <div className="text-xs black-700">
                {user.name}
            </div>

            <div className=" ms-2 text-xs black-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
              </svg>
            </div>
          </div>

          <ul class="dropdown-menu">
            <li><Link class="dropdown-item text-xs" href={route('profile.edit')}>Profile</Link></li>
            <li><Link class="dropdown-item text-xs" href={route('logout')} method="post" as="button">Logout</Link></li>
          </ul>
        </div>
      
      <div>
        {children}
      </div>
    </>
   
  )
}

export default Layout