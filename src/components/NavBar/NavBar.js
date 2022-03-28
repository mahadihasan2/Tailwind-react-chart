import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const NavBar = () => {
    const [open,setOpen] = useState(false)
    const routers = [
        { id: 1, name: 'Home', link: "/home" },
        { id: 2, name: 'Home', link: "/home" },
        { id: 3, name: 'Home', link: "/home" },
        { id: 4, name: 'Home', link: "/home" },
        { id: 5, name: 'Home', link: "/home" },
        { id: 6, name: 'Home', link: "/home" }
    ]
   
    return (
        <nav className='bg-indigo-500'>
            <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute duration-500 ease-in bg-indigo-600 w-full md:static ${open?'top-6' : 'top-[-200px]'}`}>
                {
                    routers.map(router => <Link
                        key={router.id}
                        router={router}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;