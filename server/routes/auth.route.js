import {Router} from "express";
import db from "../db/config";
import User from "../models/Users";
import bcrypt from "bcrypt-nodejs";

const router = new Router();
const user = new User;


router.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(500).json({"error": "No email or password "})
    }
    db.query(user.getWhere("email", req.body.email), (err, result) => {
        if (err) console.log(err);

        let has = bcrypt.compare(req.body.password, result[0].password);
        if (has){
            if (resulta === true) {
                res.status(200).json({"success": "Connectée !", "user": result[0]})
            }
        } else{
            if (error) console.log("Bad credential");
        }

    })

})
;

router.post('/register', (req, res) => {
    if (req.body.password !== req.body.confirm_password) {
        res.status(200).json({"error": "Credentials doesnt match"});
    }
    if (req.body.password) {
        let password = req.body.password;
        req.body.password = bcrypt.hashSync(password);
    }
    delete req.body.confirm_password;
    db.query(user.insert(req.body), (err, result) => {
        if (err) console.log(err);
        res.status(200).json({result});
    })
})


export default router;