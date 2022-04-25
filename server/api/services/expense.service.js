import Expense from "./../models/expense.model.js";
import mongoose from "mongoose";

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

// Delete the expense
export const remove = async (id) => {
  const remove = await Expense.remove({ _id: id }).exec();
  return remove;
};

// Get the expense data
export const getExpenseById = async (id) => {
  const expense = await Expense.findById(id).exec();
  return expense;
};

// Update the expense
export const update = async (id, updatedExpense) => {
  const expense = await Expense.findByIdAndUpdate({ _id: id }, updatedExpense, {
    new: true,
  }).exec();
  return expense;
};
