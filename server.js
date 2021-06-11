const express = require("express");
const path = require("path");

const app = express();

// Serve the static directory
// If we go to an URL which has 'static' in it it will serve
// the 'static' directory as usual.
app.use(
	"/static",
	express.static(path.resolve(__dirname, "frontend", "static"))
);

// We 'grab' the request and the response.
// Any path in the url will go back to the root and
// send back 'index.html'.
app.get("/*", (req, res) => {
	res.sendFile(path.resolve("frontend", "index.html"));
});

// Start the server
app.listen(process.env.PORT || 5959, () => console.log("Server running..."));
