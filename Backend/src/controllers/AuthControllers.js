const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const {
  handleSuccess,
  handleError,
  handleInternalServerError,
} = require("../utils");
const { generateToken } = require("../middleware/jwt");
const prisma = new PrismaClient();

module.exports = {
  /**
   * @description Register new user
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  Register: async (req, res) => {
    try {
      const { fullName, email, number, password, role } = req.body;
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [{ email }, { number }],
        },
      });

      if (existingUser) {
        handleError(res, 400, "User already registered");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          fullName,
          email,
          number,
          password: hashedPassword,
          role,
        },
        include: {
          role: true,
        },
      });
      delete newUser.password;
      handleSuccess(res, 201, "User registered successfully", newUser);
    } catch (error) {
      console.error("Register error:", error);
      handleInternalServerError(res, error.message);
    }
  },
  Login: async (req, res) => {
    try {
      const { email, password } = req.body;
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });
      if (!existingUser) {
        handleError(res, 404, "User not found");
      }
      // Check if user password wrong
      const isValid = await bcrypt.compareSync(password, existingUser.password);
      if (!isValid) {
        handleError(res, 401, "Invalid password");
      }
      const token = await generateToken(existingUser.id);
      console.log(existingUser.id)
      const filter = {
        name: existingUser.fullName,
        email: existingUser.email,
        number: existingUser.number,
        role: existingUser.role,
        token: token,
      };
      handleSuccess(res, 200, 'login successfully',filter);
    } catch (error) {
      handleInternalServerError(res, error.message);
    }
  },
};
