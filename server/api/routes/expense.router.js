import express from "express";
const router = express.Router();
import auth from "../middlewares/auth.middleware.js";
import { check, validationResult } from "express-validator";
import * as expenseController from "../controllers/expense.controller.js";

// @route    POST api/expense
// @desc     Save expense
// @access   Private
router.post(
  "/expense",
  auth,
  check("title", "Please include a valid title").exists(),
  check("category", "Category is required").exists(),
  check("amount", "Amount is required").exists(),
  check("incurred_on", "Date is required").exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      return expenseController.saveExpense(req, res);
    }
  }
);

export default router;
