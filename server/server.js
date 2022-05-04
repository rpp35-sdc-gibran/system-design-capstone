const path = require('path')
const express = require('express');
const port = 1128;
const app = express();

app.use(express.static(path.join(__dirname, "/client/dist")));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});