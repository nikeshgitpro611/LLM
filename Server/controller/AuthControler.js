const User = require("../modal/UserModal");
const createError = require("../utils/AppError");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return next(new createError("User already Exist", 400));
    }

    const hasPassword = await bycrpt.hash(req.body.password, 12);

    const newUser = await User.create({
      ...req.body,
      password: hasPassword,
    });

    const token = jwt.sign({ _id: newUser._id }, "secretKey123", {
      expiresIn: "90d",
    });

    res.status(201).json({
      status: "sucess",
      message: "User Registered sucessfully!",
      token,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error);
  }
};

