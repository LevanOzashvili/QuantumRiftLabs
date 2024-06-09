// src/swaggerConfig.ts
import { Options } from 'swagger-jsdoc';

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'QuantumRiftLabs API',
      version: '1.0.0',
      description: 'API documentation for the QuantumRiftLabs project',
    },
    servers: [
      {
        url: 'http://localhost:3000/api', // Base URL for the API
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Path to the API docs
};

export default options;
