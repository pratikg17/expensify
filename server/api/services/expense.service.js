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
    .sort([["incurred_on", -1]])
    .populate("recorded_by", "_id name");
  return expenses;
};

export const update = async (id, updatedExpense) => {
  const expense = await Expense.findByIdAndUpdate({ _id: id }, updatedExpense, {
    new: true,
  }).exec();
  return expense;
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

// Delete the todo
export const remove = async (id) => {
  const remove = await Expense.remove({ _id: id }).exec();
  return remove;
};

export const getExpenseById = async (id) => {
  const expense = await Expense.findById(id).exec();
  return expense;
};

export const getCurrentMontlyPreview = async (data) => {
  let currentPreview = await Expense.aggregate([
    {
      $facet: {
        month: [
          {
            $match: {
              incurred_on: { $gte: data.data.firstDay, $lt: data.lastDay },
              recorded_by: mongoose.Types.ObjectId(data.userId),
            },
          },
          {
            $group: { _id: "currentMonth", totalSpent: { $sum: "$amount" } },
          },
        ],
        today: [
          {
            $match: {
              incurred_on: { $gte: data.today, $lt: data.tomorrow },
              recorded_by: mongoose.Types.ObjectId(data.userId),
            },
          },
          { $group: { _id: "today", totalSpent: { $sum: "$amount" } } },
        ],
        yesterday: [
          {
            $match: {
              incurred_on: { $gte: data.yesterday, $lt: data.today },
              recorded_by: mongoose.Types.ObjectId(data.userId),
            },
          },
          { $group: { _id: "yesterday", totalSpent: { $sum: "$amount" } } },
        ],
      },
    },
  ]);
  let expensePreview = {
    month: currentPreview[0].month[0],
    today: currentPreview[0].today[0],
    yesterday: currentPreview[0].yesterday[0],
  };
  return expensePreview;
};

export const getExpenseMonthlyCategory = async (data) => {
  let categoryMonthlyAvg = await Expense.aggregate([
    {
      $facet: {
        average: [
          { $match: { recorded_by: mongoose.Types.ObjectId(data.userId) } },
          {
            $group: {
              _id: {
                category: "$category",
                month: { $month: "$incurred_on" },
              },
              totalSpent: { $sum: "$amount" },
            },
          },
          {
            $group: {
              _id: "$_id.category",
              avgSpent: { $avg: "$totalSpent" },
            },
          },
          {
            $project: {
              _id: "$_id",
              value: { average: "$avgSpent" },
            },
          },
        ],
        total: [
          {
            $match: {
              incurred_on: { $gte: data.firstDay, $lte: data.lastDay },
              recorded_by: mongoose.Types.ObjectId(data.userId),
            },
          },
          { $group: { _id: "$category", totalSpent: { $sum: "$amount" } } },
          {
            $project: {
              _id: "$_id",
              value: { total: "$totalSpent" },
            },
          },
        ],
      },
    },
    {
      $project: {
        overview: { $setUnion: ["$average", "$total"] },
      },
    },
    { $unwind: "$overview" },
    { $replaceRoot: { newRoot: "$overview" } },
    { $group: { _id: "$_id", mergedValues: { $mergeObjects: "$value" } } },
  ]).exec();

  return categoryMonthlyAvg;
};

export const getUserScatterPlot = async (data) => {
  let totalMonthly = await Expense.aggregate([
    {
      $match: {
        incurred_on: { $gte: data.firstDay, $lt: data.lastDay },
        recorded_by: mongoose.Types.ObjectId(data.userId),
      },
    },
    { $project: { x: { $dayOfMonth: "$incurred_on" }, y: "$amount" } },
  ]).exec();
  return totalMonthly;
};

export const getUserBarChart = async (data) => {
  let totalMonthly = await Expense.aggregate([
    {
      $match: {
        incurred_on: { $gte: data.firstDay, $lt: data.lastDay },
        recorded_by: mongoose.Types.ObjectId(data.userId),
      },
    },
    {
      $group: {
        _id: { $month: "$incurred_on" },
        totalSpent: { $sum: "$amount" },
      },
    },
    { $project: { x: "$_id", y: "$totalSpent" } },
  ]).exec();
  return totalMonthly;
};

export const getUserPieChart = async (data) => {
  let pieChart = await Expense.aggregate([
    {
      $match: {
        incurred_on: { $gte: data.firstDay, $lte: data.lastDay },
        recorded_by: mongoose.Types.ObjectId(data.userId),
      },
    },
    {
      $group: {
        _id: { category: "$category" },
        totalSpent: { $sum: "$amount" },
      },
    },
    { $group: { _id: "$_id.category", avgSpent: { $avg: "$totalSpent" } } },
    { $project: { x: "$_id", y: "$avgSpent" } },
  ]).exec();
  return pieChart;
};

