import errorHandler from "./../helpers/errorHandler.js";
import * as userService from "../services/user.service.js";
import e from "express";

const setSuccessResponse = (obj, response) => {
  response.status(200);
  response.json(obj);
};

const setErrorResponse = (error, response) => {
  response.status(500);
  response.json(error);
};

// Get the list of the todos
export const index = async (request, response) => {
  try {
    // const todos = await todoService.search({});
    setSuccessResponse({ hello: "world" }, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

// @route    POST api/users
// @desc     Register user
// @access   Public
export const registerUser = async (req, res) => {
  try {
    let user = await userService.findByEmail(req.body.email);
    if (user.length > 0) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    } else {
      const newUser = await userService.create(req.body);
      return res.status(200).json({
        message: "Successfully signed up!",
      });
    }
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};
