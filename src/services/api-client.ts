import axios from "axios"

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : '2afb1243716446e290e52fd336a1394c'
    }
})