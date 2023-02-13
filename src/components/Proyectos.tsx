import React,{useCallback} from 'react'
const Proyectos = () => {
    return (
        <div className='container-fluid text-bg-dark pb-3'>
            <a id='Proyectos'></a>
            <h2 className='text-center pt-2'>
                Proyectos
            </h2>
            <div className="container-lg">
                <div className="card mx-5 my-3 text-bg-secondary bg-opacity-75">
                    <div className="card-body">
                        <div className="row py-3">
                            <div className="col-lg-6">
                                <h5 className="card-title">Cuida Tus Monedas</h5>
                                <p className="card-text">Proyecto realizado en el Bootcamp de Generation,
                                    es una pagina web de educacion financiera, enfocada en jovenes y niños
                                    para que puedan aprender de finanzas de una manera facil y sencilla</p>
                                <a href="https://github.com/LucasA75/CuidaTusMonedas" className="btn btn-primary">Revisa el proyecto</a>
                            </div>
                            <div className="col-lg-6">
                                {/* la classname d-none d-md-block hace que el div se oculte en pantallas menores de 720px */}
                                <div className='d-none d-md-block imgP1'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="container-lg">
                <div className="card mx-5 my-3 text-bg-secondary bg-opacity-75">
                    <div className="card-body">
                        <div className="row py-3">
                            <div className="col-lg-6">
                                <h5 className="card-title">Juego Bunny Jump</h5>
                                <p className="card-text">Juego hecho en javascript con el framework Phaser,
                                    solo funciona en PC,
                                    hay que saltar las plataformas para llegar a lo mas alto 😊</p>
                                <a href="https://lucasa75.github.io/Juego-Phaser-Javascript/bunny-jump/index.html" className="btn btn-primary">Revisa el proyecto</a>
                            </div>
                            <div className="col-lg-6">
                                {/* la classname d-none d-md-block hace que el div se oculte en pantallas menores de 720px */}
                                <div className='d-none d-md-block imgP2'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-lg">
                <div className="card mx-5 my-3 text-bg-secondary bg-opacity-75">
                    <div className="card-body">
                        <div className="row py-3">
                            <div className="col-lg-6">
                                <h5 className="card-title">Juego Rocket Mouse</h5>
                                <p className="card-text">Juego hecho en Typescript con el framework Phaser,
                                    es un infinite runner donde hay que coleccionar monedas </p>
                                <a href="https://lucasa75.github.io/JuegoTypescriptReactVite" className="btn btn-primary">Revisa el proyecto</a>
                            </div>
                            <div className="col-lg-6">
                                {/* la classname d-none d-md-block hace que el div se oculte en pantallas menores de 720px */}
                                <div className='d-none d-md-block imgP3'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyectos