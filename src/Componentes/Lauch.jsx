import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'
import './StyContac.css'

function Launch() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='w-25'>

      <Button style={{backgroundColor:"#A03232"}}  className='border-0' variant="primary" onClick={handleShow} >
      Nosotros
      </Button>

      <Offcanvas  show={show} onHide={handleClose}>
        <Offcanvas.Header  closeButton>
          <Offcanvas.Title>Quienes somos?</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        Somos una empresa dedicada al desarrollo de software avanzado, especializados en crear soluciones <br />
        a medida que no solo transforman negocios, sino que también garantizan la protección absoluta de la  <br />
        información mediante robustos servicios de ciberseguridad. <br />
        En un mundo digital donde los riesgos son omnipresentes, nuestra misión es proporcionar a nuestros <br />
        clientes la tranquilidad de saber que sus sistemas están totalmente protegidos contra amenazas  <br />
        cibernéticas. Desde el diseño inicial hasta la implementación final, cada fase de nuestro proceso <br />
        de desarrollo se enfoca en cumplir con los más altos estándares de seguridad y calidad.
        </Offcanvas.Body>
      </Offcanvas>
    </div >
  );
}

export default Launch;