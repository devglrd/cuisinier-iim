import {Router} from "express";
import db from "../db/config";
import Message from "../models/Message";
import bcrypt from "bcrypt-nodejs";
import User from "../models/Users";

const router = new Router();
const message = new Message;
const user = new User();



router.post('/', (req, res) => {
    db.query(message.insert(req.body), (err, result) => {
        if (err) console.log(err);
        if (result) {
            res.status(200).json({"success": "Message envoyé"})
        }
    });
});


router.get('/', (req, res) => {
    db.query(message.allOrder(), (err, result) => {
        if (err) console.log(err);
        if (result) {
            res.status(200).json({result})
        }
    });
});

router.get('/users/:id', (req, res) => {
    db.query(message.getWhere("fk_sender_id", req.params.id), (err, result) => {
        if (err) console.log(err);
        if (result) {
            res.status(200).json({result})
        }
    });
});


export default router;