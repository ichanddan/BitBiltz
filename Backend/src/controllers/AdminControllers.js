const { PrismaClient } = require("@prisma/client");
const {
  handleSuccess,
  handleError,
  handleInternalServerError,
} = require("../utils");
const prisma = new PrismaClient();


module.exports = {
  getAccount: async (req, res) => {
    try {
      const existingUser = await prisma.user.findMany();
      const filter = existingUser.map(user =>{
        return {
          id: user.id,
          name: user.fullName,
          email: user.email,
          number: user.number,
          role: user.role,
        };
      })
      return handleSuccess(res, 200, "All Users", filter);
    } catch (error) {
      console.error("get Account error:", error);
      return handleInternalServerError(res, error.message);
    }
  },
  getProduct: async (req, res) => {
    try {
      console.log(req.body);
      const { email, otp } = req.body;

      const cheekUser = await prisma.user.findUnique({
        where: { email: email },
      });

      if (!cheekUser) {
        return handleError(res, 404, "User not found");
      }

      if (cheekUser.password) {
        return handleError(res, 400, "User already verified");
      }
      if (cheekUser.otp !== otp || cheekUser.otpExpiresAt < new Date()) {
        return handleError(res, 400, "Invalid or expired OTP");
      }

      // Update user to set verified status and clear OTP
      const verifiedUser = await prisma.user.update({
        where: { id: cheekUser.id },
        data: {
          isVerified: true,
        },
      });

      // delete verifiedUser.password;
      return handleSuccess(
        res,
        200,
        "User verified successfully",
        verifiedUser
      );
    } catch (error) {
      console.error("Verify OTP error:", error);
      return handleInternalServerError(res, error.message);
    }
  },
  Register: async (req, res) => {
    try {
      const { email, password, fullName, phone, role } = req.body;

      const cheekUser = await prisma.user.findUnique({
        where: { email: email },
      });

      if (!cheekUser) {
        return handleError(res, 404, "User not found");
      }

      // if (cheekUser.password) {
      //   return handleError(res, 400, "User already updated");
      // }

      //  has Password
      const hashPassword = await bcrypt.hash(password, 10);

      // Update user to set verified status and clear OTP
      const verifiedUser = await prisma.user.update({
        where: { id: cheekUser.id },
        data: {
          fullName,
          number: phone,
          password: hashPassword,
          role,
        },
      });

      // delete verifiedUser.password;
      return handleSuccess(
        res,
        200,
        "User verified successfully",
        verifiedUser
      );
    } catch (error) {
      console.error("Verify OTP error:", error);
      return handleInternalServerError(res, error.message);
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
        return handleError(res, 404, "User not found");
      }
      // Check if user password wrong
      const isValid = await bcrypt.compareSync(password, existingUser.password);
      if (!isValid) {
        handleError(res, 401, "Invalid password");
      }
      if (existingUser.isVerified === false) {
        return handleError(res, 401, "please verify with otp");
      }
      const token = await generateToken(existingUser.id);
      const filter = {
        name: existingUser.fullName,
        email: existingUser.email,
        number: existingUser.number,
        role: existingUser.role,
        access_token: token,
      };
      handleSuccess(res, 200, "login successfully", filter);
    } catch (error) {
      return handleInternalServerError(res, error.message);
    }
  },
};
