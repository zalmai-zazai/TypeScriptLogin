import express from 'express';

import cors from 'cors';

import { RegisterModel } from './models/Register';
import { LoginModel } from './models/Login';
import connectDB from './db';

const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  RegisterModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.json('Already have an account');
      } else {
        RegisterModel.create({
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
  LoginModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) res.json('Login Successfully');
      else res.json('The password is incorrect');
    } else {
      res.json('No record was found');
    }
  });
});
app.listen(3001, () => {
  console.log('Server is running');
});
