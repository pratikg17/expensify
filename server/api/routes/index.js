import userRouter from "./user.router.js";

// Set up routing
export default (app) => {
  app.use("/", userRouter);
};
