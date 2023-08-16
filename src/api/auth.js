export const postRegister = async (value)=>{
    try {
        const postDTO = {
            username: value.username,
            email: value.email,
            password: value.password
        }
        const data = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(postDTO)
        })

        const json = await data.json()
        return json;
    } catch (error) {
        console.log(error)
    }
}

export const postLogin = async (value)=>{
    try {
        const data = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(value)
        })

        const json = await data.json()
        return json;
    } catch (error) {
        console.log(error)
    }
}

export const postLogout = async ()=>{
    try {
        const data = await fetch("http://localhost:3000/api/logout", {
            method: "POST"
        })
        const json = await data.json()
        return json;
    } catch (error) {
        console.log(error)
    }
}