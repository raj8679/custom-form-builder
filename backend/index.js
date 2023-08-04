const express = require("express");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())

app.get('/', (req,res) => {
    res.send("welcome to homepage")
})

app.get('/formrender', (req, res) => {
    const {data} = req.body;
    
})

app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})