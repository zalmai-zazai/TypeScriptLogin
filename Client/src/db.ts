import mongoose from 'mongoose';

const connectDB = () => {
  mongoose
    .connect(
      'mongodb+srv://ZalmaiZazai:zazai123@cluster0.r7h2w.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => {
      console.log('DB Connected');
    });
};

export default connectDB;
