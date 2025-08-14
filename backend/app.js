import express from 'express';
import 'dotenv/config';
import { getChat } from './controllers/chat.controller.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());



// Routes
app.post('/api/chat', getChat);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

