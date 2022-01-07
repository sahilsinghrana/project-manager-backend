const bcrypt = require("bcrypt");
const User = require("../db/models/User");

var jwt = require("jsonwebtoken");

class AuthController {
  static async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(404).json({
          message: "User or Email Not Found",
        });
      }

      //  Check password

      const isValidUser = await bcrypt.compare(password, user.password);

      if (isValidUser) {
        const token = await jwt.sign(
          {
            user: {
              id: user.id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
            },
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "2hr",
          }
        );

        res.cookie("token", token, {
          expires: "",
        });

        res.status(200).send({
          message: "Login successful!",
        });
      } else {
        return res.status(404).json({
          message: "User or Email Not Found",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  }

  static async register(req, res) {
    const { email, password, first_name, last_name } = req.body;
    try {
      const passHash = await generateHash(password);
      const user = await User.create({
        password: passHash,
        email: email,
        first_name,
        last_name,
      });

      res.status(200).json(user);
    } catch (err) {
      // console.error(err);
      res.status(500).json(err.message);
    }
  }
}

const generateHash = async (pass) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pass, salt);
  } catch (err) {
    console.log(err);
  }
};

module.exports = AuthController;
