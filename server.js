const express = require('express');
const axios = require('axios');
const client = require('./client');

const app = express();
app.use(express.json());

app.get('/', async (req,res) => {
    const cachedData = await client.get('emails');
    if(cachedData){
        return res.json(JSON.parse(cachedData));
    }
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/comments');
    const emails = data.map((item)=>{
        return `${item.email}`;
    });
    await client.set('emails',JSON.stringify(emails));
    await client.expire('emails',30);
    return res.json(emails)
});



app.listen(3001,()=>{
    console.log("Server is running on port 3001");
})