import swaggerJSDoc from 'swagger-jsdoc';
const swaggerDefinition = {
    openapi: '3.0.0',
  info: {
    title: 'Shopping Zone API',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'Shopping Zone Admin Panel',
      url: 'http://localhost:4200/',
    },
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Development server',
    },
  ],
};
    
const options = {
    swaggerDefinition,
    apis: ['./src/swagger/**.ts'],
};
const swaggerDocs=swaggerJSDoc(options);
  
export default swaggerDocs