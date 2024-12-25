import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: false,
  })
);

// Basic health check route
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok'
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});