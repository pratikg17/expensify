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
