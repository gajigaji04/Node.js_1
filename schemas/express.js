const express = require("express");
const app = express();

// Import the router
const postsRouter = require("./routes/posts");

// Use the router
app.use("/", postsRouter);

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
