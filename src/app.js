const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const router = express.Router();

//Rotas
const produtoRoute = require("./routes/produtoRouter");
const clienteRoute = require("./routes/clienteRoute");

const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Api de Clientes",
      description: "Documentação da API de Clientes",
      contact: {
        name: "Carlos Andrew",
      },
      servers: ["http://localhost:5000"],
    },
  },
  // ['.routes/*.js']
  apis: ["src/controllers/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/cliente", clienteRoute);
app.use("/produto", produtoRoute);

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});

module.exports = app;
