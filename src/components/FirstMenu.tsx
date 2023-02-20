import React from 'react'
import { Parallax } from 'react-parallax'
import foto1 from "../assets/program1.jpg"
import Descripcion from './Descripcion'
import Arrow from "../assets/Arrow.svg"



const FirstMenu = () => {
    return (

        <div className="container-fluid container-fluid1" >
            <Parallax strength={-500} bgImage={foto1}
                blur={{ min: -9, max: 10 }}>
                <div className="content d-flex justify-content-center align-items-center">
                    <Descripcion />

                </div>
                <div className='text-center ScrollAni'>
                    <p className='position-relative ScrollP'><i>scroll</i></p>
                    <img src={Arrow} className='Flecha'></img>
                </div>

            </Parallax>
        </div>
    )
}

export default FirstMenu