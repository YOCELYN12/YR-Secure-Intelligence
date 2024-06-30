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
//Post
//Put

