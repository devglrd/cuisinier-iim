
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
});


router.post('/update', (req, res) => {
    const sql = `UPDATE users SET name = "${req.body.name}", email = "${req.body.email}", adresse = "${req.body.adresse}", tarif = "${req.body.tarif}" WHERE id = ${req.body.id}`;
    db.query(sql, (err, result) => {
        if(err) console.log(err);
        res.status(200).json({result})
    })
});



router.get('/search/:name', (req, res) => {
    if (!(req.params.name)){
        res.status(200).json({"error" : "Passez une chaine de caractère svp"})
    }

    const sql = `SELECT * FROM users WHERE preferes_recette LIKE '%${req.params.name}%'`;

    db.query(sql, (err, result) => {
        if (err) console.log(err);
        res.status(200).json({result});

    })
})

export default router;