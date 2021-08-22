import axios from "axios"

export default {
    cadastrar: async(url,data)=>{
        try {
            const res = await axios.post(url,data)
            return res
            
        } catch (e) {
            console.error(e)
            return null
        }

    },
    login: async (url,data)=>{
        try {
            const res = await axios.post(url,data)
            return res
            
        } catch (e) {
            console.error(e)
            return null
        }
    }


}