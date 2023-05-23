import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'dcd27f7508d54932a7bfaa688a0f0fed'
    }
})
