import React from 'react'
import { useState } from 'react'
import git from "../assets/github.svg"
import Linkedin from "../assets/linkedin.svg"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top bg-opacity-75">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <a className="nav-link mx-3" aria-current="page" href="#Sobremi">Sobre Mi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3" href="#Habilidades">Habilidades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3" href="#Proyectos">Proyectos</a>
                        </li>
                    </ul>
                    <span className='navbar-text'>
                        <div className="social-icon">
                            <a href='https://github.com/LucasA75' className='mx-3'><img src={git} alt="github" ></img></a>
                            <a href='https://www.linkedin.com/in/lucas-acevedo-castro/'><img src={Linkedin} alt="Linkedin" ></img></a>
                        </div>

                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
