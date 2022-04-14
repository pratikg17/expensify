import express from "express";
const router = express.Router();
import auth from "../middlewares/auth.middleware.js";
import { check, validationResult } from "express-validator";

// @route    POST api/expense
// @desc     Save expense
// @access   Private
router.post(
  "/expense",
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password is required").exists(),
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // } else {
    //   return authController.signInUser(req, res);
    // }
  }
);

export default router;
