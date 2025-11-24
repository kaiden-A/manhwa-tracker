import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

import manhwaRoutes from './routes/manhwaRoutes.js';

dotenv.config();
const app = express();


const PORT = process.env.PORT || 5000;
const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/manhwa-db'

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin : process.env.FRONTEND_URL  || 'http://localhost:5173',
    methods: ['GET' , 'POST' , 'PUT' , 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}))

mongoose.connect(dbUri)
        .then(() => {
            console.log('CONNECTED TO DATABASE')
            app.listen(PORT , () => console.log(`APP IS LISTENING AT PORT ${PORT}`));
        })
        .catch((err) => console.log(err))

app.get('/' , (req , res) => {
    console.log('opening server')
    res.json({msg : 'server open'})
})

app.use('/api' , manhwaRoutes);
