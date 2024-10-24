const utils = require('../utils');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs')
const prisma = new PrismaClient();
module.exports = {
    /**
     * @description Register new user
     * @param {Object} req - Express request object
     * @param {Object} res - Express response object
     */
    Register: async (req, res) => {
      try {
        const { fullName, email, number, password, role } =
          req.body;
        const existingUser = await prisma.user.findFirst({
          where: {
            OR: [{ email }, { number }],
          },
        });
  
        if (existingUser) {
          utils.handleError(res, 400 , 'User already registered')
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await prisma.user.create({
          data: {
            fullName,
            email,
            number,
            password: hashedPassword,
            role
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