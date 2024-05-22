// Create web server
// http://localhost:3000/comments

// Require the Express module
const express = require("express");

// Create an instance of the Express server
const app = express();

// Require the JSON file
const comments = require("./data/comments");

// Set the port
const port = 3000;

// Respond with the json for all comments
app.get("/comments", (req, res) => {
	res.json(comments);
});

// Respond with the json for the comment with the corresponding ID
app.get("/comments/:id", (req, res) => {
	const id = req.params.id;
	const comment = comments.find((comment) => comment._id === parseInt(id));
	if (!comment) {
		res.status(404).json({ message: `Comment with ID ${id} not found` });
		return;
	}
	res.json(comment);
});

// Listen to incoming requests
app.listen(port, () => {
	console.log(`Web server is listening on port ${port}`);
});