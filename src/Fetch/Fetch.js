const URL =  "http://localhost:2929/"

//Get
const Get = async(endpoint)=>{
    try {
        const peticion = await fetch(URL+endpoint)
        const datos = await peticion.json()
        return datos
    } catch (error) {
        console.log(error)
    }
    
}

export {Get}

//Delete
const Delete = async (id,endpoint)=>{
    try {
        const eliminar = await fetch(URL+endpoint+id, {
            method: "DELETE",
        })
        const salida = await eliminar.json()
        if (eliminar.ok){
            alert("Se elimino exitosamente")
        }else {
            console.log("Eror")
        }
        console.log(salida)

    } catch (error) {
        console.log("error")
    }
}

export {Delete}


//Post
const Post = async(datos,endpoint) =>{
    try {
        const respuesta = await fetch(URL+endpoint,{
            method:"POST",
            headers:
            {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        })
        const data = await respuesta.json()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}
export {Post}


//Put
const Put = async(estado,endpoint)=>{

    try {
    
        const answer = await fetch (URL+endpoint+"/"+estado.id,{
            
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(estado)

        })
        const data = await answer.json()
        console.log(data);
    } catch (error) {
        console.log(error )
    }
}

export {Put}

