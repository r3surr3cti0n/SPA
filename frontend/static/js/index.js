// This is the client side JS

const router = async () => {
	// Whenever the user go to this 'path' we will run the
	// function which is in the 'view' property.
	const routes = [
		{ path: "/", view: () => console.log("Viewing Home") },
		{ path: "/posts", view: () => console.log("Viewing Posts") },
		{ path: "/settings", view: () => console.log("Viewing Settings") },
	];

	// Loop through each routes to potential match
	const potentialMatches = routes.map((route) => {
		return {
			route: route,
			// Examine that the current route's path matches with the
			// current location in the browser
			isMatch: route.path === location.pathname,
		};
	});

	// Find that actual match
	let match = potentialMatches.find(
		(potentialMatch) => potentialMatch.isMatch
	);

	// If there is no match set 'match' to Home
	if (!match) {
		match = {
			route: routes[0],
			isMatch: true,
		};
	}

	// Run the function which is inside the 'view' property
	console.log(match.route.view());
};

document.addEventListener("DOMContentLoaded", () => {
	router();
});
