//FORMATO DE DOCUMENTAÇÃO DE UMA ROTA
/**
 * @swagger
 * /produto:
 *  get:
 *    description: Use para obter a lista completa de produtos.
 *    responses:
 *      '200':
 *        description: Uma resposta de sucesso.
 */

exports.get = async (req, res, next) => {
  await res.status(200).send("Lista de Produtos!");
};
