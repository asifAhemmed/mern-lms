import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDB } from './lib/database-connection.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());


app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectToDB();
});