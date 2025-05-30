import express from 'express';
import cors from 'cors';
import { contactRoute } from './routes/apiRoutes';

const app = express();
const PORT = process.env.PORT || 3001

app.use(cors());
app.use(express.json());

app.use('/api', contactRoute);

app.listen(PORT, () => {
  console.log('Server in ascolto sulla porta: ' + PORT);
});