const express = require("express");
const cors = require("cors");
const { db } = require("./connection/database");

const app = express();

app.use(express.json());
app.use(cors());

global.db = db;
require("./routes")(app);

const port = 3001;
app.listen(port, () => {
	console.log(`server is running at http://localhost:${port}`);
});
