import React from 'react'


const Footer = () => {
  return (
    <div>
      
      <div className='container-footer-home'>

        <footer className='footer-home'>

          <div className='container-home'>

            <div className='footer-row-home'>

              <div className='footer-links'>

                <h4>Empresa</h4>
                
                <ul>

                  <li><a href="./Contacto">Nosotros</a></li>
                  <li><a href="#">Politica de privacidad</a></li>
                  <li><a href="#">Afiliate</a></li>

                </ul>

              </div>


              <div className='footer-links'>

                <div id='prueba'>
                  <h4>Ayuda</h4>
                </div>
                <ul>
                  <li><a href="#">Preguntas</a></li>
                  <li><a href="#">Compras</a></li>
                </ul>

              </div>

            </div>

          </div>

        </footer>
      </div>
    </div>
  )
}

export default Footer
