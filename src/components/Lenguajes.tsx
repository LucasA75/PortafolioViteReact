import React from 'react'
import { Parallax } from 'react-parallax'
import Programa from "../assets/Programa.jpg"
import Frameworks from './Frameworks'
const Lenguajes = () => {
  return (
    <div className='text-bg-dark'>
      <a id='Habilidades'></a>
      <h2 className='text-center mb-4'>Habilidades</h2>
        <div className='container-lg Container-Tech pb-5'>
          <div className='container RecuadroLenguajes text-bg-secondary text-center d-flex flex-column justify-content-around rounded-4 bg-opacity-50 mb-5'>
            <h3 className='p-1 pt-2'>
              Lenguajes de Programacion
            </h3>
            {/* Es un row y sus respectivas cols por cada lenguaje */}
            <div className='row m-3'>
              <div className='col-lg-5 text-center'>
                Java
              </div>
              <div className='col-lg-5'>
                <div className="progress" role="progressbar" aria-label="Animated striped example">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ "width": "45%" }}>45%</div>
                </div>
              </div>
            </div>
            <div className='row m-3'>
              <div className='col-lg-5 text-center'>
                JavaScript
              </div>
              <div className='col-lg-5'>
                <div className="progress" role="progressbar" aria-label="Animated striped example">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ "width": "40%" }}>40%</div>
                </div>
              </div>
            </div>
            <div className='row m-3'>
              <div className='col-lg-5 text-center'>
              TypeScript
              </div>
              <div className='col-lg-5'>
                <div className="progress" role="progressbar" aria-label="Animated striped example">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ "width": "35%" }}>35%</div>
                </div>
              </div>
            </div>
            <div className='row m-3'>
              <div className='col-lg-5 text-center'>
                Python
              </div>
              <div className='col-lg-5'>
                <div className="progress" role="progressbar" aria-label="Animated striped example">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ "width": "15%" }}>15%</div>
                </div>
              </div>
            </div>
          </div>
          <Frameworks />
        </div>
    </div>
  )
}

export default Lenguajes