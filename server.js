const express = require("express");
const path = require("path");

const app = express();

// We 'grab' the request and the response.
// Any path in the url will go back to the root and
// send back 'index.html'.
app.get("/*", (req, res) => {
	res.sendFile(path.resolve("frontend", "index.html"));
});

// Start the server
app.listen(process.env.PORT || 5959, () => console.log("Server running..."));
