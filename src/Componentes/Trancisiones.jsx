import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Trancisiones() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className='trancision'>
      <Button
        className='btnPrueba' onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       Como editar un producto?
      </Button>
    </div>
    
      <Collapse in={open}>
        <div id="example-collapse-text">
       En la parte inferior izquierda, estan los espacios espacios, cada uno <br />
       con su identidicador, se coloca lo que se desea cambiar, y una vez completado todo <br />
       se busca el producto que se quiere editar, y se edita al darle click al boton 
        </div>
      </Collapse>
    </>
  );
}

export default Trancisiones;