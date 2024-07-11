import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import "./StyContac.css"

const FromContacto = () => {
  //Constante con el objeto para guardar los datos pedidos
  const [fromDatos, setFromDatos] = useState({
    name: '',
    email: "",
    phone: '',
    company: "",
    subject: '',
    message: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFromDatos({
      fromDatos,
      [name]: value,

    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const templateParams = {
      from_name: fromDatos.name,
      from_email: fromDatos.email,
      phone: fromDatos.phone,
      company: fromDatos.company,
      subject: fromDatos.subject,
      message: fromDatos.message,
    };

    emailjs.send('service_hsyfrc4 ', 'your_template_id', templateParams, 'your_user_id')
      .then((response) => {
        console.log('Correo enviado!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
      });
  }


  return (
    <div>
     <div className="div-Contac" >

      <form onSubmit={handleSubmit}>
        <label className="letra" >
          Nombre:
          <input className='int-contacto' type="text" name='name' value={fromDatos.name} onChange={handleChange} required />
        </label>

        <br />

        <label className="letra">
          Email:
          <input className='int-contacto' type="email" value={fromDatos.email} onChange={handleChange} required />
        </label>

        <br />

        <label className="letra">
          Telefono:
          <input className='int-contacto' type="text" name='phone' value={fromDatos.phone} onChange={handleChange} required />
        </label>


        <br />

        <label className="letra">
          Empresa:
          <input className='int-contacto' type="text" name='company' value={fromDatos.company} onChange={handleChange} required />
        </label>

        <br />

        <label className="letra">
          Asunto:
          <input className='int-contacto' type="text" name='subject' value={fromDatos.message} onChange={handleChange} required />
        </label>

        <br />
        <button type='submit'>Enviar</button>
        
      </form>
      </div>
    </div>


  )
}

export default FromContacto
