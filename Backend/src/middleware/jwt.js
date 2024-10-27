const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const { handleError } = require("../utils");
const prisma = new PrismaClient();

module.exports = {
  verifyToken: async (req, res, next) => {
    let token = req?.headers?.authorization?.split(" ")[1];
    if (!token) {
      handleError(res, 401, "Unauthorized");
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      const user = await prisma.user.findUnique({
        where: { id: decode.userData },
      });
      req.user = user;
      console.log(user);
      next();
    } catch (error) {
      handleError(res, 408, "Invalid token");
    }
  },

  generateToken: (userData) => {
    return jwt.sign({ userData }, process.env.JWT_SECRET, {
      expiresIn: "365D",
    });
  },
};
