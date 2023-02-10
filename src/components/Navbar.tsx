import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  sticky-top bg-light bg-opacity-50">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-row justify-content-around" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-3">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Tech</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar