import { Link } from "gatsby";
import React from "react";

const NavBar = () => {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Home</span>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;