import React from 'react'
import { Parallax } from 'react-parallax'
import paisaje from "../assets/paisaje2.jpg"
import Cards from './Cards'
import Descripcion from './Descripcion'

const FirstMenu = () => {
    return (

        <div className="container-fluid container-fluid1" >
            <Parallax strength={-500} bgImage={paisaje}
                blur={{ min: -9, max: 10 }}>
                <div className="content">
                    <Descripcion />
                </div>
                <Cards/>
            </Parallax>
        </div>
    )
}

export default FirstMenu