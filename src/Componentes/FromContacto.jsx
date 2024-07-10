import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const fromContacto = () => {
    const [fromDatos,setFromDatos] = useState({
        name:'',
        email:"",
        phone:'',
        company:"",
        subject:'',
        message:""
    })

    const handleChange = (e)=>{
        const{name,value} =e.target
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

        <form onSubmit={handleSubmit}>
            <label >
                Nombre:
                <input type="text" name='name' value={fromDatos.name} onChange={handleChange} required/>
            </label>

            <br />

            <label>
                Email:
                <input type="email" value={fromDatos.email} onChange={handleChange} required/>
            </label>

            <br />

            <label>
                Telefono:
                <input type="text" name='phone' value={fromDatos.phone} onChange={handleChange} required />
            </label>


            <br />
            
            <label> 
                Empresa:
                <input type="text" name='company' value={fromDatos.company} onChange={handleChange} required />
            </label>

            <br />
             
             <label>
                Asunto:
                <input type="text" name='subject' value={fromDatos.message} onChange={handleChange} required/>
             </label>

             <br />
             <button type='submit'>Enviar</button>


        </form>
      <h3>Hola</h3>
    </div>
  )
}

export default fromContacto
