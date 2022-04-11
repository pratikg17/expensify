import express from "express";
import * as userController from "../controllers/user.controller.js";
// it has the routes to the CRUD operations to the controller

const router = express.Router();
router.route("/user").get(userController.index);

export default router;
