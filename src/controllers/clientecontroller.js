//FORMATO DE DOCUMENTAÇÃO DE UMA ROTA
/**
 * @swagger
 * /cliente:
 *  get:
 *    description: Use para obter a lista completa de clientes.
 *    responses:
 *      '200':
 *        description: Uma resposta de sucesso.
 */

exports.get = async (req, res, next) => {
  await res.status(200).send("Lista de Clientes!");
};
