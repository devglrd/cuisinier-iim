import {Router} from "express";
import db from "../db/config";
import User from "../models/Users";
import bcrypt from "bcrypt-nodejs";

const router = new Router();
const user = new User;


router.post('/test', (req,res) => {
    db.query(user.getWhere("email", req.body.email), (err, result) => {
        console.log(result[0].password);
        if (result){

            bcrypt.compare(req.body.password, result[0].password, (error, resulta) => {
                if (error) console.log(error);
                console.log(resulta);
                if (resulta === true) {
                    console.log("ok");
                    res.status(200).json({"success": "Connectée !", "user": result[0]})
                }
            });

        }
    });
});

router.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(500).json({"error": "No email or password "})
    }
    console.log(req.body);

    db.query(user.getWhere("email", req.body.email), (err, result) => {
        if (err) {
            console.log(err);
            res.status(200).send({"error": "A error as occured "});
            return;
        }
        if (result === [] || !result || result.length === 0) {
            res.status(500).json({"error": "A error as occured no email in db"});
            return;
        }
        console.log(result);
        bcrypt.compare(req.body.password, result[0].password, (error, resulta) => {
            if (error) {
                console.log(error);
                res.status(200).send({"error": "A error as occured in bcrypt"});
                return;
            }
            if (resulta === true) {
                console.log("ok");
                res.status(200).json({"success": "Connectée !", "user": result[0]})
            }
        });
    })

});

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