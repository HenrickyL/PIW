import axios from "axios"
const url = "http://localhost:3002/api/usuarios"//process.env.REACT_APP_URL + process.env.REACT_APP_URL_USER

export default {
    cadastrar: async(data)=>{
        try {
            const res = await axios.post(url,data)
            return res
            
        } catch (e) {
            console.error(e)
            return null
        }

    },
    login: async (data)=>{
        try {
            
            const res = await axios.post(url+'/login',data)
            return res
            
        } catch (e) {
            console.error(e)
            return null
        }
    }


}