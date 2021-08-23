import axios from "axios"

const url = "http://localhost:3002/api/posts"//process.env.REACT_APP_URL + process.env.REACT_APP_URL_USER

export default {
    listar: async(token)=>{
        try {
            const res = await axios.get(url,{
                headers:{token:token}
            })
            return res.data
            
        } catch (e) {
            console.error(e)
            return []
        }

    },
    setPost:async(auth,data)=>{
        try {
            const res = await axios.post(url,data,{
                headers:{token:auth.token}
            })
            return res.data
            
        } catch (e) {
            console.error(e)
            return []
        }
    },
    getComment: async(auth,idPost)=>{
        try {
            const res = await axios.get(url+`/${idPost}/comentarios`,{
                headers:{token:auth.token}
            })
            return res.data
             
        } catch (e) {
            console.error(e)
            return []
        }
    },
    setComment: async(auth,data)=>{
        let url = "http://localhost:3002/api/comentarios"
        /*
        "texto":"ok ok",
        "id_post": "60e14da028611174d6748e97",
        "likes": 0 
        */
        try {
            const res = await axios.post(url,data,{
                headers:{token:auth.token}
            })
            return res.data
            
        } catch (e) {
            console.error(e)
            return []
        }
    },
    getUser: async(auth)=>{
        let url = "http://localhost:3002/api/usuarios"
        
        try {
            const res = await axios.get(url,{
                headers:{token:auth.token}
            })
            return res.data
            
        } catch (e) {
            console.error(e)
            return []
        }

    }

}