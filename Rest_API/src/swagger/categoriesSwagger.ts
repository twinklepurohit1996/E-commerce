//Add Categories from Admin Panel
/**
 * @swagger
 * /categories/addCate:
 *   post:
 *     summary: Add Categories from Admin Panel.
 *     tags:
 *      - Categories CURD
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *                 file:
 *                   type: file
 *                   description: The categories image.
 *                   example: ind.jpeg
 *                 cate_name:
 *                   type: string
 *                   description: The categories name.
 *                   example: Camera
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     cate_name:
 *                        type: string
 *                        description: The categories's name.
 *                        example: Camera
 *                     file:
 *                        type: file
 *                        desvription: The categories's Image.
 *                        example: dsfmoklasjfkl.jpeg

*/

// Backend Categories List 
/**
 * @swagger
 * /categories/cateList:
 *   get:
 *     summary: Retrieve a list of categories from Admin Panel
 *     tags:
 *      - Categories CURD 
 *     description: Retrieve a list of categories from backend.
 *     responses:
 *       200:
 *         description: A list of Categories.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The categories ID.
 *                         example: 0
 *                       cate_name:
 *                         type: string
 *                         description: The categories name.
 *                         example: Camera
 *                       file:
 *                         type: string
 *                         description: The categories image.
 *                         example: dsfmoklasjfkl.jpeg
 *         
*/

// Backend Delete Categories 
/**
 * @swagger
 * /categories/delCate/{id}:
 *   delete:
 *     summary: Delete Categories in Admin Panel
 *     tags:
 *      - Categories CURD  
 *     description: Delete a Categories from backend.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the Categories to retrieve.
 *         schema:
 *           type: string 
 *     responses:
 *       200:
 *         description: Delete user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       status:
 *                         type: integer
 *                         description: response status.
 *                         example: 0
 *                       message:
 *                         type: string
 *                         description: response message.
 *                         example: test
 *         
*/

//Get Data of Cetogeries for edit 
/**
 * @swagger
 * /categories/editCate/{id}:
 *   get:
 *     summary: Retrieve a categories data for edit in Admin panel
 *     tags:
 *      - Categories CURD 
 *     description: Retrieve a categories data for edit from backend.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the categories to retrieve.
 *         schema:
 *           type: string 
 *     responses:
 *       200:
 *         description: Get Categories Data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The categories ID.
 *                         example: 0
 *                       cate_name:
 *                         type: string
 *                         description: The categories name.
 *                         example: Book
 *                       file:
 *                         type: string
 *                         description: The Categories image.
 *                         example: categories.jpeg
 *         
*/

//Update User Data 
/**
 * @swagger
 * /categories/updateCate/{id}:
 *   put:
 *     summary: Update of categories Data in Admin panel.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the categories to retrieve.
 *         schema:
 *           type: string 
 *     tags:
 *      - Categories CURD 
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *                 file:
 *                   type: file
 *                   description: The categories Image.
 *                 cate_name:
 *                   type: string
 *                   description: The categories name.
 *                   example: Book
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     file:
 *                       type: file
 *                       description: The categories Image.
 *                     cate_name:
 *                        type: string
 *                        description: The categories name.
 *                        example: Book
*/


