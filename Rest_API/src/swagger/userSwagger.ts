//Login of Admin from Admin panel
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Admin Panel login .
 *     tags:
 *      - Login 
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                 email:
 *                   type: string
 *                   description: The user's email.
 *                   example: twinklepurohitjd6@gmail.com
 *                 password:
 *                    type: string
 *                    description: The user's password.
 *                    example: Twinkle@12 
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
 *                     email:
 *                        type: string
 *                        description: The user's email.
 *                        example: twinklepurohit@gmail.com
 *                     password:
 *                        type: string
 *                        description: The user's name.
 *                        example: Hello@123
*/

// Registration of user from Admin Panel
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registration of user in Admin Panel.
 *     tags:
 *      - User CURD
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *                 file:
 *                   type: file
 *                   description: The user's image.
 *                 name:
 *                   type: string
 *                   description: The user's name.
 *                   example: Leanne Graham
 *                 email:
 *                   type: string
 *                   description: The user's email.
 *                   example: test@gmail.com
 *                 xgen:
 *                   type: string
 *                   enum: ['Female','Male']
 *                   description: The user's gender.
 *                   example: Male
 *                 address:
 *                   type: string
 *                   description: The user's address.
 *                   example: test
 *                 password:
 *                   type: string
 *                   description: The user's password.
 *                   example: test
 *                 confirmPassword:
 *                   type: string
 *                   description: The user's confirmPassword.
 *                   example: test  
 *                 role:
 *                   type: string
 *                   enum: ['Customer','Vendor','Store Manager','Administrator']
 *                   description: The user's role.
 *                   example: Customer 
 *                 mob:
 *                   type: integer
 *                   description: The user's mobile number.
 *                   example: 9876548221
 *                 dob:
 *                   type: string
 *                   description: The user's date of birth.
 *                   example: 12/20/1995
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
 *                     name:
 *                        type: string
 *                        description: The user's name.
 *                        example: Leanne Graham
 *                     email:
 *                        type: string
 *                        description: The user's email.
 *                        example: twinklepurohitjd6@gmail.com
 *                     password:
 *                        type: string
 *                        description: The user's name.
 *                        example: hELLO@12
 *                     confirmPassword:
 *                        type: string
 *                        description: The user's confirmPassword.
 *                        example: hELLO@12
 *                     file:
 *                        type: file
 *                        desvription: The user's Image.
 *                     xgen:
 *                        type: string
 *                        enum: ['Female','Male']
 *                        description: The user's gender.
 *                        example: Male
 *                     address:
 *                        type: string
 *                        description: The user's address.
 *                        example: test 
 *                     role:
 *                        type: string
 *                        enum: ['Customer','Vendor','Store Manager','Administrator']
 *                        description: The user's role.
 *                        example: Customer 
 *                     mob:
 *                        type: integer
 *                        description: The user's mobile number.
 *                        example: 9876548221
 *                     dob:
 *                        type: string
 *                        description: The user's date of birth.
 *                        example: 12/20/1995
*/

// Backend User List 
/**
 * @swagger
 * /userList:
 *   get:
 *     summary: Retrieve a list of users in Admin Panel
 *     tags:
 *      - User CURD 
 *     description: Retrieve a list of users from backend.
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
 *                         description: The user's name.
 *                         example: Leanne Graham
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: test@gmail.com
 *                       xgen:
 *                         type: string
 *                         description: The user's gender.
 *                         example: Male
 *                       address:
 *                         type: string
 *                         description: The user's address.
 *                         example: test
 *                       mob:
 *                         type: integer
 *                         description: The user's mobile number.
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

// Backend Delete User 
/**
 * @swagger
 * /delUser/{id}:
 *   delete:
 *     summary: Delete user in Admin Panel
 *     tags:
 *      - User CURD  
 *     description: Delete a users from backend.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
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

//Get Data of User for edit 
/**
 * @swagger
 * /editUser/{id}:
 *   get:
 *     summary: Retrieve a user data for edit in Admin panel
 *     tags:
 *      - User CURD 
 *     description: Retrieve a  user data for edit from backend.
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
 *                         description: The user's name.
 *                         example: Leanne Graham
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: test@gmail.com
 *                       password:
 *                         type: string
 *                         description: The user's password.
 *                         example: test
 *                       confirmPassword:
 *                         type: string
 *                         description: The user's confirmPassword.
 *                         example: test
 *                       xgen:
 *                         type: string
 *                         description: The user's gender.
 *                         example: Male
 *                       address:
 *                         type: string
 *                         description: The user's addres.
 *                         example: test
 *                       mob:
 *                         type: integer
 *                         description: The user's mobile number.
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

//Update User Data 
/**
 * @swagger
 * /updateUser/{id}:
 *   put:
 *     summary: Update of user Data in Admin panel.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: string 
 *     tags:
 *      - User CURD 
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *                 file:
 *                   type: file
 *                   description: The user's Image.
 *                 name:
 *                   type: string
 *                   description: The user's name.
 *                   example: Leanne Graham
 *                 email:
 *                   type: string
 *                   description: The user's email.
 *                   example: test@gmail.com
 *                 xgen:
 *                   type: string
 *                   enum: ['Female','Male']
 *                   description: The user's gender.
 *                   example: Male
 *                 address:
 *                   type: string
 *                   description: The user's address.
 *                   example: test
 *                 password:
 *                   type: string
 *                   description: The user's password.
 *                   example: test
 *                 confirmPassword:
 *                   type: string
 *                   description: The user's confirmPassword.
 *                   example: test  
 *                 role:
 *                   type: string
 *                   enum: ['Customer','Vendor','Store Manager','Administrator']
 *                   description: The user's role.
 *                   example: Customer 
 *                 mob:
 *                   type: integer
 *                   description: The user's mobile number.
 *                   example: 9876548221
 *                 dob:
 *                   type: string
 *                   description: The user's date of birth.
 *                   example: 12/20/1995
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
 *                       description: The user's Image.
 *                     name:
 *                        type: string
 *                        description: The user's name.
 *                        example: Leanne Graham
 *                     email:
 *                        type: string
 *                        description: The user's email.
 *                        example: test@gmail.com
 *                     xgen:
 *                        type: string
 *                        enum: ['Female','Male']
 *                        description: The user's gender.
 *                        example: Male
 *                     address:
 *                        type: string
 *                        description: The user's address.
 *                        example: test
 *                     password:
 *                        type: string
 *                        description: The user's password.
 *                        example: test
 *                     confirmPassword:
 *                        type: string
 *                        description: The user's confirmPassword.
 *                        example: test  
 *                     role:
 *                        type: string
 *                        enum: ['Customer','Vendor','Store Manager','Administrator']
 *                        description: The user's role.
 *                        example: Customer 
 *                     mob:
 *                        type: integer
 *                        description: The user's mobile number.
 *                        example: 9876548221
 *                     dob:
 *                        type: string
 *                        description: The user's date of birth.
 *                        example: 12/20/1995
*/

//User Profile of Logged In User
/**
 * @swagger
 * /userInfo/{id}:
 *   get:
 *     summary: Retrieve a logged in user data in Admin panel (User profile page)
 *     tags:
 *      - User Profile Admin panel
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