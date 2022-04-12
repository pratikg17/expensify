import * as userService from "../services/user.service.js";
import jwt from "jsonwebtoken";
// @route    POST api/auth
// @desc     Login
// @access   Public
export const signInUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await userService.findByEmail(email);
    if (!user)
      return res.status("401").json({
        error: "User not found",
      });

    if (!user.authenticate(password)) {
      return res.status("401").send({
        error: "Email and password don't match.",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET
    );

    res.cookie("t", token, {
      expire: new Date() + 9999,
    });

    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log("err", err);
    return res.status("401").json({
      error: "Could not sign in",
    });
  }
};
