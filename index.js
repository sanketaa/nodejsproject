const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("How are you doing");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

// exports.handler = async (event) => {
//   // TODO implement
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify("Hello from Lambda!"),
//   };
//   return response;
// };
