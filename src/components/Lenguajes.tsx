import React from 'react'
import { Parallax } from 'react-parallax'
import Programa from "../assets/Programa.jpg"
import Frameworks from './Frameworks'
const Lenguajes = () => {
  return (
    <div>
      <Parallax strength={200} bgImage={Programa}>
        <div className='container Container-Tech'>
          <div className='container RecuadroLenguajes text-bg-dark text-center d-flex flex-column justify-content-around rounded-4 bg-opacity-75'>
            <h3 className='p-1 mt-2'>
              Lenguajes de Programacion
            </h3>
            {/* Es un row y sus respectivas cols por cada lenguaje */}
            <div className='row m-3'>
              <div className='col-lg-5 text-center'>
                Java
              </div>
              <div className='col-lg-5'>
                <div className="progress" role="progressbar" aria-label="Animated striped example">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ "width": "55%" }}></div>
                </div>
              </div>
            </div>
            <div className='row m-3'>
              <div className='col-lg-5 text-center'>
                JavaScript
              </div>
              <div className='col-lg-5'>
                <div className="progress" role="progressbar" aria-label="Animated striped example">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ "width": "45%" }}></div>
                </div>
              </div>
            </div>
            <div className='row m-3'>
              <div className='col-lg-5 text-center'>
                Python
              </div>
              <div className='col-lg-5'>
                <div className="progress" role="progressbar" aria-label="Animated striped example">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ "width": "10%" }}></div>
                </div>
              </div>
            </div>
            <div className='row m-3'>
              <div className='col-lg-5 text-center'>
                Kotlin
              </div>
              <div className='col-lg-5'>
                <div className="progress" role="progressbar" aria-label="Animated striped example">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ "width": "5%" }}></div>
                </div>
              </div>
            </div>
            <div className='row m-3'>
              <div className='col-lg-5 text-center'>
                Dart
              </div>
              <div className='col-lg-5'>
                <div className="progress" role="progressbar" aria-label="Animated striped example">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ "width": "5%" }}></div>
                </div>
              </div>
            </div>

          </div>
          <Frameworks />
        </div>
      </Parallax>
    </div>
  )
}

export default Lenguajes