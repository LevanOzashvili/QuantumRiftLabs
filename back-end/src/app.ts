import express from 'express';
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './swaggerConfig';
import itemRoutes from './routes/itemRoutes';
import { errorMiddleware } from './middleware/errorMiddleware';

const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:5001',
  'http://localhost:3002',
];
app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the request origin is allowed
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);
app.use(express.json());

// Swagger setup
const specs = swaggerJsdoc(swaggerConfig);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api', itemRoutes);

// Global error handling middleware
app.use(errorMiddleware);

export default app;
