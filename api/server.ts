import express, { Request, Response } from 'express';

const app = express();
const PORT = 3001;

app.use(express.json());

//TODO middleware logger implementation for the routes

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});