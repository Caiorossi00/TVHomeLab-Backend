import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import matchesRoutes from './routes/matches.routes.js';

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'TVHomeLab-Backend está funcionando.',
  });
});

app.use('/api/matches', matchesRoutes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor disponível na porta ${port}`);
});
