const express = require('express')
const app = express()
require('dotenv').config();
require('../Backend-QuizUI/Db/Database')
const PORT = 5000



app.get('/',(req,res)=>{
    res.send('Welcome to the Express Server!');
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});