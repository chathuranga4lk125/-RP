const express = require('express');
const bodyParser = require('body-parser');
const mongose = require('mongoose');
const app = express();
const PORT = 3000;
const {mongoUrl} = require('./keys')

require('./models/User')
const authRoutes = require('./routes/authRoutes')

app.use(bodyParser.json());
app.use(authRoutes);

mongose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongose.connection.on('connected',()=>{
    console.log("Connectd to the MongoDB");
})
mongose.connection.on('err',(err)=>{
    console.log("Error "+err);
})

app.get('/',(req,res)=>{
    res.send('hello');
})



app.listen(PORT,()=>{
    console.log('Server is Running on '+PORT);
})