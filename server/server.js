import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./db/config.js"
import usersRoute from "./routes/users.route";
import User from "./models/Users";
import bcrypt from "bcrypt";
let app = express();
const PORT = 3002;

db.connect((err) => {
    if (err) console.log(`Erreur ${err}`)
    console.log("Database connected");
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());
const user = new User;

app.post('/api/login', (req, res) => {
    if(!req.body.email || !req.body.password){
        res.status(500).json({"error" : "No email or password "})
    }
    db.query(user.getWhere("email", req.body.email), (err, result) => {
        if (err) console.log(err);
    
        bcrypt.compare(req.body.password, result[0].password, (error, resulta) => {
            if(error) console.log(error)
            if(resulta === true){
                res.status(200).json({"success" : "Connectée !", "user" : result[0]})
            }
        });
    })
    
});

app.post('/api/register', (req, res) => {
    if(req.body.password !== req.body.confirm_password){
        res.status(200).json({"error" : "Credentials doesnt match"});
    }
    if(req.body.password){
        let password = req.body.password;
        let saltRounds = 10;
        let hash = bcrypt.hashSync(password, saltRounds);
        req.body.password = hash;
    }
    delete req.body.confirm_password;
    db.query(user.insert(req.body), (err, result) => {
        if(err) console.log(err);
        res.status(200).json({result});
    })
})

//users routes
app.use('/api/users', usersRoute)

app.listen(PORT, () => {
    console.log(`conected on port ${PORT}`);
});



