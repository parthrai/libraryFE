import React from "react";


const Header = ()=>{

    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/books">List Books</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/books/create">Add Books</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/authors">List Authors</a>
                </li>

            </ul>
        </nav>
    )
}

export default Header