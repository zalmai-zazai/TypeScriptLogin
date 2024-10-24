"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => {
    mongoose_1.default
        .connect('mongodb+srv://ZalmaiZazai:zazai123@cluster0.r7h2w.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => {
        console.log('DB Connected');
    });
};
exports.default = connectDB;
