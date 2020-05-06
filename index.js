const express = require('express');
const shortid = require('shortid');

const server = express();

server.use(express.json());

let hubs = [];
let lessons = [];

server.get('/', (req, res) => {
    res.json({message: "hello world!"})
});

//--------
//creat
//---------

server.post('/api/hubs',(req, res) => {
    const hubInfo = req.body;
    console.log(hubInfo);

    hibInfo.id = shortid.generate();
    hubs.push(hubInfo);

    res.status(201).json(hubInfo);
})

//----------
//Read
//--------------
server.get('/api/hubs', (requ, res) => {
    res.status(200).json(hubs);
})

//-------
//Delet
//----------
server.delete ('/api/hubs/id', (req, res) =>{
    const {id} = req.params;
    console.log(id);
})



//------------

const PORT = 5000;

server.listen(PORT, () => {
    console.log('listening on http://localhost:${PORT}')
});