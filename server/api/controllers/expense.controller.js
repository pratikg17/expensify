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

// @route    GET api/expense/:expenseId
// @desc     Get expenses by user
// @access   Private
export const getExpenseById = async (req, res) => {
  try {
    const id = req.params.expenseId;
    let expenses = await expenseService.getExpenseById(id);
    res.json(expenses);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};


// @route    DELETE api/expense
// @desc     Delete expenses by user
// @access   Private
export const deleteExpenseById = async (req, res) => {
  try {
    const id = req.params.expenseId;
    let expenses = await expenseService.remove(id);
    res.json(expenses);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};


// @route    PUT api/expense
// @desc     UPDATE expenses by user
// @access   Private
export const updateExpenseById = async (req, res) => {
  console.log(req.body);
  try {
    const expenseId = req.body.expense_id;
    const updatedExpense = Object.assign({}, req.body);
    updatedExpense.updated = new Date();
    let expenses = await expenseService.update(expenseId, updatedExpense);
    res.json(expenses);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
