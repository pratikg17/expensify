import express from "express";
import { check, validationResult } from "express-validator";
import * as userController from "../controllers/user.controller.js";
// it has the routes to the CRUD operations to the controller

const router = express.Router();

router
  .route(
    "/user",
    check("name", "Name is required").notEmpty().exists(),
    check("email", "Please include a valid email").isEmail().exists(),
    check("password", "Please enter a password with 6 or more characters")
      .isLength({ min: 6 })
      .exists()
  )
  .post((req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      return userController.registerUser(req, res);
    }
  });

router.route("/user").get(userController.index);

export default router;
