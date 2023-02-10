import React from 'react'

const Descripcion = () => {
    return (
        <div className='container-lg text-center containerDescripcion bg-light bg-opacity-75 p-3 rounded-3 mt-5'>
            <div>
                Una fotito mia
            </div>
            <div className='row '>
                <div className='d-flex flex-column justify-content-evenly col-xl-5 '>
                    <div className='mt-5'>
                    <h1>Lucas Acevedo</h1>
                    <h3>Cosas que me gustan hacer: </h3>
                    <ul>
                        <li>
                            Me encanta programar
                        </li>
                        <li>
                            Me gustan los juegos de mesa
                        </li>
                        <li>
                            Subir cerros y montañas
                        </li>
                        <li>
                            Jugar juegos indies
                        </li>
                    </ul>
                    </div>
                </div>
                <div className='col-xl-5'>

                </div>
            </div>

        </div>
    )
}

export default Descripcion