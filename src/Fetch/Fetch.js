const URL =  "http://localhost:3001/db.json"

//Get
const Get = async()=>{
    try {
        const peticion = await fetch(URL)
        const datos = await peticion.json()
        return datos

    } catch (error) {
        console.log(error)
    }
}

export {Get}

//Delete
const Delete = async (id)=>{
    try {
        const eliminar = await fetch(URL,id, {
            method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
        })
        const salida = await eliminar.json()

        if (eliminar.ok){
            alert("Se elimino exitosamente")
            await Get()
        }else {
            alert("Eror")
        }
        console.log(salida)

    } catch (error) {
        console.log("error")
    }
}

export {Delete}


//Post
const Post = async(datos) =>{
    try {
        const respuesta = await fetch(URL,{
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
const Put = async(id,estado)=>{
    try {
        const nuevoEstado = {
            estado: !estado
        }
        const answer = await fetch (URL+id,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(nuevoEstado)
        })
        const data = await answer.json()
        console.log(data);
    } catch (error) {
        console.log(error )
    }
}

