import * as expenseService from "../services/expense.service.js";
import * as userService from "../services/user.service.js";
import errorHandler from "./../helpers/errorHandler.js";

// @route    POST api/expense
// @desc     Save expense
// @access   Public
export const saveExpense = async (req, res) => {
  try {
    req.body.recorded_by = req.user._id;
    const expense = await expenseService.create(req.body);
    return res.status(200).json({
      message: "Expense recorded!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
