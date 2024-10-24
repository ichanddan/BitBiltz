const utils = require('../utils');``

module.exports = {
    /**
     * @description Register new user
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     */
    Register: async (req, res) => {
      try {
        const { firstName, lastName, email, phoneNumber, password, roleId } =
          req.body;
        const existingUser = await prisma.user.findFirst({
          where: {
            OR: [{ email }, { phoneNumber }],
          },
        });
  
        if (existingUser) {
          utils.handleError(res, 400 , 'User already')
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
          data: {
            firstName,
            lastName,
            email,
            phoneNumber,
            password: hashedPassword,
            roleId,
          },
          include: {
            role: true,
          },
        });
        delete newUser.password;   
        utils.handleSuccess(res, 201, 'User registered successfully', newUser)
      } catch (error) {
        console.error("Register error:", error);
        utils.handleInternalServerError(res, error.message)
      }
    },
}