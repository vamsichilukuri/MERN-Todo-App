const mongoose = require("mongoose");
const url = process.env.MONGODB_URL || "mongodb://localhost:27017/todo";
mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const connection = mongoose.connection;
const db = connection.on("open", () => {
	console.log("mongoDB connected..");
});

module.exports = { db };
