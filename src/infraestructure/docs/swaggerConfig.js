const swaggerJSDoc = require('swagger-jsdoc');
const config = require('../../config');
const port = config.port;

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-commerce API',
      version: '1.0.0',
      description: 'API para sistema de e-commerce con autenticación y gestión de productos',
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: 'Servidor local',
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Product: {
          type: 'object',
          required: ['name', 'price'],
          properties: {
            name: { 
              type: 'string',
              description: 'Nombre del producto'
            },
            price: { 
              type: 'number',
              description: 'Precio del producto'
            },
            description: { 
              type: 'string',
              description: 'Descripción del producto'
            },
          },
        },
        User: {
          type: 'object',
          required: ['username', 'email', 'password'],
          properties: {
            username: { 
              type: 'string',
              description: 'Nombre de usuario'
            },
            email: { 
              type: 'string',
              format: 'email',
              description: 'Correo electrónico del usuario'
            },
            password: { 
              type: 'string',
              format: 'password',
              description: 'Contraseña del usuario'
            },
            roles: {
              type: 'array',
              items: {
                type: 'string'
              },
              description: 'Roles del usuario',
              default: ['user']
            }
          },
        },
        LoginRequest: {
          type: 'object',
          required: ['username', 'password'],
          properties: {
            username: {
              type: 'string',
              description: 'Nombre de usuario'
            },
            password: {
              type: 'string',
              format: 'password',
              description: 'Contraseña del usuario'
            }
          }
        },
        AuthResponse: {
          type: 'object',
          properties: {
            user: {
              $ref: '#/components/schemas/User'
            },
            token: {
              type: 'string',
              description: 'JWT token de autenticación'
            }
          }
        },
        OrderInput: {
          type: 'object',
          required: ['customerId', 'items', 'total'],
          properties: {
            customerId: { type: 'string', description: 'ID del cliente' },
            items: {
              type: 'array',
              description: 'Productos en la orden',
              items: {
                type: 'object',
                properties: {
                  productId: { type: 'string', description: 'ID del producto' },
                  quantity: { type: 'integer', description: 'Cantidad solicitada' }
                }
              }
            },
            total: { type: 'number', description: 'Total de la orden' }
          }
        },

        Order: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            customerId: { type: 'string' },
            items: { $ref: '#/components/schemas/OrderInput/properties/items' },
            total: { type: 'number' },
            createdAt: { type: 'string', format: 'date-time' }
          }
        }
      }
    },

    paths: {
      '/api/v1/orders': {
        get: {
          tags: ['Orders'],
          summary: 'Listar todas las órdenes',
          security: [{ BearerAuth: [] }],
          responses: {
            200: {
              description: 'Listado de órdenes exitoso',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/Order' }
                  }
                }
              }
            }
          }
        },
        post: {
          tags: ['Orders'],
          summary: 'Crear una nueva orden',
          security: [{ BearerAuth: [] }],
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/OrderInput' }
              }
            }
          },
          responses: {
            201: {
              description: 'Orden creada con éxito',
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/Order' }
                }
              }
            },
            400: {
              description: 'Datos inválidos o incompletos'
            }
          }
        }
      }
    }
  },
  apis: ['./src/adapters/routes/*.js'],
};

module.exports = swaggerJSDoc(options);