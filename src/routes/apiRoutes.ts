import express from 'express';
import { sendMessage } from '../controllers/contactController';

export const contactRoute = express.Router();

contactRoute.post('/contact', sendMessage);