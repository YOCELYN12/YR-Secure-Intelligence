const URL =  "http://localhost:3001/api/task/"

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
//Put

