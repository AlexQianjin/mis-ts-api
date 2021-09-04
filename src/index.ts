import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 4000;

app.get('/', (req: Request, res: Response): void => {
  res.json({ message: 'node typescript set up' });
});

app.listen(PORT, (): void => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
