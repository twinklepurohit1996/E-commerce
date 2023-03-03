//User Profile of Logged In User
/**
 * @swagger
 * /products/userInfo/{id}:
 *   get:
 *     summary: Retrieve a logged in user data in Admin panel (User profile page)
 *     tags:
 *      - IMdsgfds
 *     description: Retrieve a logged in user data in Admin panel (User profile page).
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string 
 *     responses:
 *       200:
 *         description: A list of users.
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
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user name.
 *                         example: Leanne Graham
 *                       email:
 *                         type: string
 *                         description: The user email.
 *                         example: test@gmail.com
 *                       password:
 *                         type: string
 *                         description: The user password.
 *                         example: test
 *                       confirmPassword:
 *                         type: string
 *                         description: The user confirmPassword.
 *                         example: test
 *                       xgen:
 *                         type: string
 *                         description: The user gender.
 *                         example: Male
 *                       address:
 *                         type: string
 *                         description: The user addres.
 *                         example: test
 *                       mob:
 *                         type: integer
 *                         description: The user mobile number.
 *                         example: 9876548221
 *                       dob:
 *                         type: string
 *                         description: The user's date of birth.
 *                         example: 12/20/1995
 *                       file:
 *                         type: string
 *                         description: The user's image.
 *                         example: dsfmoklasjfkl.jpeg
 *         
*/