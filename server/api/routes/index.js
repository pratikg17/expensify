import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";

// Set up routing
export default (app) => {
  app.use("/api", userRouter);
  app.use("/api", authRouter);
};
