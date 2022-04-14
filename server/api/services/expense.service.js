import Expense from "./../models/expense.model.js";

// Create new Expense
export const create = async (newExpense) => {
  const expense = new Expense(newExpense);
  return expense.save();
};

// Find  Expense between range by user
export const getExpenseByUserAndRange = async (startDate, endDate, userId) => {
  let expenses = await Expense.find({
    $and: [
      { incurred_on: { $gte: startDate, $lte: endDate } },
      { recorded_by: userId },
    ],
  })
    .sort("incurred_on")
    .populate("recorded_by", "_id name");
  return expenses;
};
