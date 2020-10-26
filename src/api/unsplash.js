import axios from 'axios';

export default axios.create({ //customize 
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID yuX3mNH0s_NvZNP3qfZGGh1WvIyGiwl2FST739In8OU'
    }
});

