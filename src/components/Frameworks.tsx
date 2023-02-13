import React from 'react'

const Frameworks = () => {
    return (
        <div className='container px-1 Container-Tech'>
            <div className='container RecuadroLenguajes text-bg-secondary text-center d-flex flex-column justify-content-around rounded-4 bg-opacity-50'>
                <h3 className='p-1 mt-2'>
                    Frameworks
                </h3>
                {/* Es un row y sus respectivas cols por cada lenguaje */}
                <div className='row m-3'>
                    <div className='col-lg-5 text-center'>
                        React
                    </div>
                    <div className='col-lg-5'>
                        <div className="progress" role="progressbar" aria-label="Animated striped example">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ "width": "65%" }}></div>
                        </div>
                    </div>
                </div>
                <div className='row m-3'>
                    <div className='col-lg-5 text-center'>
                        Phaser
                    </div>
                    <div className='col-lg-5'>
                        <div className="progress" role="progressbar" aria-label="Animated striped example">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ "width": "55%" }}></div>
                        </div>
                    </div>
                </div>
                <div className='row m-3'>
                    <div className='col-lg-5 text-center'>
                        SpringBoot
                    </div>
                    <div className='col-lg-5'>
                        <div className="progress" role="progressbar" aria-label="Animated striped example">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ "width": "40%" }}></div>
                        </div>
                    </div>
                </div>
                <div className='row m-3'>
                    <div className='col-lg-5 text-center'>
                        Flutter
                    </div>
                    <div className='col-lg-5'>
                        <div className="progress" role="progressbar" aria-label="Animated striped example">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ "width": "5%" }}></div>
                        </div>
                    </div>
                </div>
                <div className='row m-3'>
                    <div className='col-lg-5 text-center'>
                        Django
                    </div>
                    <div className='col-lg-5'>
                        <div className="progress" role="progressbar" aria-label="Animated striped example">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ "width": "2%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frameworks