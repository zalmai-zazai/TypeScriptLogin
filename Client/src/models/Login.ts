import mongoose from 'mongoose';

const LoginSchema = new mongoose.Schema({
  email: String,
  password: String,
});

export const LoginModel = mongoose.model('Registers', LoginSchema);
