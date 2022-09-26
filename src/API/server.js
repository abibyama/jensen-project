const express = require("express");
const app = express();
const cors = require("cors")

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "Chai Academy server" })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Chai Academy server is running on port ${8080}.`);
})