import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./db/config.js"
import usersRoute from "./routes/users.route";
import authRoutes from "./routes/auth.route"
import User from "./models/Users";
import bcrypt from "bcrypt-nodejs";
let app = express();
const PORT = 3002;

db.connect((err) => {
    if (err) console.log(`Erreur ${err}`)
    console.log("Database connected");
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());
//users routes
app.use('/api', authRoutes);
app.use('/api/users', usersRoute);

app.listen(PORT, () => {
    console.log(`conected on port ${PORT}`);
});



