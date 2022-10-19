import express from 'express';

const api = express();

api.get('/status', (_, res )=>{
    res.json({
        msg:'API En linea funcionando'
    })
})

export default api;