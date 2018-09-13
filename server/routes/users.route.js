
import { Router } from "express";
import db from "../db/config";
import User from "../models/Users";

const router = new Router();
const user = new User;

router.get('/', (req, res) => {
    db.query(user.all(), (err, result) => {
        if (err) console.log(err);
        res.status(200).json({result})
    });
});

router.get('/:id', (req, res) => {
    db.query(user.getWhere("id", req.params.id), (err, result) => {
        res.status(200).json({result})
    });
});

router.post('/', (req, res) => {
    db.query(user.insert(req.body), (err, result) => {
        if(err) console.log(err);
        res.status(200).json({result})
    })
});

router.delete('/:id', (req, res) => {
    db.query(user.delete(req.params.id), (err, result) => {
        if(err) console.log(err);
        res.status(200).json({result}); 
    })
})

export default router;