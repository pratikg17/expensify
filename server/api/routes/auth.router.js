import express from "express";
const router = express.Router();
import auth from "../middlewares/auth.middleware.js";
import { check, validationResult } from "express-validator";
import * as authController from "../controllers/auth.controller.js";

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  "/auth",
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password is required").exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      return authController.signInUser(req, res);
    }
  }
);

export default router;
