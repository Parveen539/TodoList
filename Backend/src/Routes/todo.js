import express from 'express';

const route = express.Router();

route.get('/list', (req, res) => {
    res.status(200).json({message : "Hello World"});
});

export default route;