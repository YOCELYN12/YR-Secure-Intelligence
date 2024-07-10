import React from 'react'
import Footer from '../Componentes/Footer'
import Header from '../Componentes/Header'
import fromContacto from '../Componentes/FromContacto'

const Contacto = () => {
  return (
    <div>
     <Header/>
      
      <h3>Nosotros</h3>
      <p>Somos una empresa dedicada al desarrollo de software avanzado, especializados en crear soluciones <br />
        a medida que no solo transforman negocios, sino que también garantizan la protección absoluta de la  <br />
        información mediante robustos servicios de ciberseguridad. <br />
        En un mundo digital donde los riesgos son omnipresentes, nuestra misión es proporcionar a nuestros <br />
        clientes la tranquilidad de saber que sus sistemas están totalmente protegidos contra amenazas  <br />
        cibernéticas. Desde el diseño inicial hasta la implementación final, cada fase de nuestro proceso <br />
        de desarrollo se enfoca en cumplir con los más altos estándares de seguridad y calidad.</p>
     <Footer/>
    </div>
  )
}

export default Contacto
