import React from 'react'
import { WindupChildren, Pace } from "windups";
import 'animate.css';
import 'react-typewriting-effect/dist/index.css'




const Descripcion = () => {
    const textos = [
        { id: 1, name: "Desarrollador Front-end" },
        { id: 2, name: "Desarrollador Back-end" },
        { id: 3, name: "Programador de VideoJuegos" }
    ]
    return (
        <div className='container-lg containerDescripcion  bg-opacity-75 p-3 rounded-3 mt-5'>
            <div className='row d-flex flex-column justify-content-evenly mt-5 '>
                <div className='mt-5  pb-3'>
                    <h1 className='PresentacionMain'> Hola 👋, <br></br> Soy Lucas Acevedo</h1>
                    <WindupChildren>
                        <Pace ms={50}>

                            {textos.map((texto) => {
                                return (
                                    <div key={texto.id}>
                                        <h2 className='visible my-2 fs-1'>{texto.name}</h2>
                                    </div>
                                )
                            })}
                        </Pace>
                    </WindupChildren>
                    <div className="d-grid gap-2 col-6 mt-4">
                        <a className="btn btn-primary" href="https://drive.google.com/file/d/1KFmX8jYJBmBE0gaGjcLhuYvwn2-mvv9X/view?usp=share_link" target='_blank' rel='noopener noreferrer' >Mi CV</a>  
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Descripcion