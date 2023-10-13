const express = require("express");
const app = express();
const PORT = 3001; //* shams - pref: w/ react 3000 P

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
