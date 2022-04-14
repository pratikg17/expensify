import Expense from "./../models/expense.model.js";

// Create new Expense
export const create = async (newExpense) => {
  const expense = new Expense(newExpense);
  return expense.save();
};
