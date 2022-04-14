import * as expenseService from "../services/expense.service.js";
import errorHandler from "./../helpers/errorHandler.js";

// @route    POST api/expense
// @desc     Save expense
// @access   Private
export const saveExpense = async (req, res) => {
  try {
    req.body.recorded_by = req.user._id;
    await expenseService.create(req.body);
    return res.status(200).json({
      message: "Expense recorded!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

// @route    GET api/expense
// @desc     Get expenses by user
// @access   Private
export const getExpenseByUser = async (req, res) => {
  try {
    let startDate = req.query.start_date;
    let endDate = req.query.end_date;
    let userId = req.user._id;
    let expenses = await expenseService.getExpenseByUserAndRange(
      startDate,
      endDate,
      userId
    );
    res.json(expenses);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
