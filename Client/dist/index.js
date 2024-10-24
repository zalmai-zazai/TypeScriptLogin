"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Register_1 = require("./models/Register");
const Login_1 = require("./models/Login");
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
db_1.default;
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    Register_1.RegisterModel.findOne({ email: email })
        .then((user) => {
        if (user) {
            res.json('Already have an account');
        }
        else {
            Register_1.RegisterModel.create({
                name: name,
                email: email,
                password: password,
            })
                .then((result) => res.json('Account created'))
                .catch((err) => res.json(err));
        }
    })
        .catch((err) => res.json(err));
});
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    Login_1.LoginModel.findOne({ email: email }).then((user) => {
        if (user) {
            if (user.password === password)
                res.json('Login Successfully');
            else
                res.json('The password is incorrect');
        }
        else {
            res.json('No record was found');
        }
    });
});
app.listen(3001, () => {
    console.log('Server is running');
});
