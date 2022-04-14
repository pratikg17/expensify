import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";
import expenseRouter from "./expense.router.js";

// Set up routing
export default (app) => {
  app.use("/api", userRouter);
  app.use("/api", authRouter);
  app.use("/api", expenseRouter);
};
