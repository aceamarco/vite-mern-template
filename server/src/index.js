const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.static("dist"));
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/")

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
