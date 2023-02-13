import React from 'react'
import { Parallax } from 'react-parallax'
import foto1 from "../assets/program1.jpg"
import Descripcion from './Descripcion'

const FirstMenu = () => {
    return (

        <div className="container-fluid container-fluid1" >
            <Parallax strength={-500} bgImage={foto1}
                blur={{ min: -9, max: 10 }}>
                <div className="content d-flex justify-content-center align-items-center">
                    <Descripcion />
                </div>            
            </Parallax>
        </div>
    )
}

export default FirstMenu