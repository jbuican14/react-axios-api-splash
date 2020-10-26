
import axios from 'axios';

export default axios.create({ //customize 
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID API-KEY'
    }
});
