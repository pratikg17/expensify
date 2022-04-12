import app from "./api/app.js";

const port = process.env.PORT || 9000;

// Start the server
app.listen(port, () => {
  console.log(`Server running at ${port}.`);
});
