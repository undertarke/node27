/**
 *  @swagger
 *  /getFood:
 *   get:
 *    description: responses
 *    tags: [User]
 *    responses:
 *         200: 
 *          description: success   
 */

/**
 * @swagger
 * /api/user/updateUser/{id}:
 *  put:
 *      description: responses
 *      tags: [User]
 *      parameters:
 *      - in: path
 *        name: id
 *      - in: body
 *        name: user
 *        schema:
 *           type: object
 *           properties:
 *             full_name:
 *               type: string
 *             email:
 *               type: string
 *             pass_word:
 *               type: string
 *      responses:
 *          200: 
 *              description: res   
 */