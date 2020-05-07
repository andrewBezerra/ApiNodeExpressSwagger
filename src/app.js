const express = require("express");
const bodyParser = require("body-parser");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const router = express.Router();

//Rotas
const produtoRoute = require("./routes/produtoRouter");
const clienteRoute = require("./routes/clienteRoute");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
  apis: [
    "src/controllers/clientecontroller.js",
    "src/controllers/produtocontroller.js",
  ],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/cliente", clienteRoute);
app.use("/produto", produtoRoute);
//require("./controllers/clientecontroller")(app);

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});

module.exports = app;
