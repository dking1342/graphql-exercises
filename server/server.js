import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import graphqlSchema from './config/graphql.js';

// express middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// graphql init
app.use('/graphql',graphqlHTTP(graphqlSchema))

// server init
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log('Server listening...'))