export const getTask = async (id)=>{
try {
    const data = await fetch(`http://localhost:3000/api/task/${id}`, {
        method: "GET",
        credentials: "include"
    })
    const json = await data.json()
    return json;
    } catch (error) {
        console.log(error)
    }
}

export const getTasks = async ()=>{
    try {
        const data = await fetch(`http://localhost:3000/api/task`, {
            method: "GET",
            credentials: "include"
        })
        const json = await data.json()
        return json;
    } catch (error) {
        console.log(error)
    }
}

export const postTask = async (value)=>{
    try {
        const data = await fetch(`http://localhost:3000/api/task`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(value),
            credentials: "include"
        })
        const json = await data.json()
        return json;
    } catch (error) {
        console.log(error)
    }
}

export const putTask = async (value, id)=>{
    try {
        const data = await fetch(`http://localhost:3000/api/task/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(value),
            credentials: "include"
        })
        const json = await data.json()
        return json;
    } catch (error) {
        console.log(error)
    }
}

export const deleteTask = async (id)=>{
    try {
        const data = await fetch(`http://localhost:3000/api/task/${id}`, {
            method: "DELETE",
            credentials: "include"
        })
        const json = await data.json()
        return json;
    } catch (error) {
        console.log(error)
    }
}