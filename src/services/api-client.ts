import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '08ae56303e804d5ba44a56d4894a0c02'
    }
})
