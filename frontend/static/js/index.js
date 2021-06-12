// This is the client side JS
// --------------------------

// We will run this function instead of following the links in the HTML.
// This will prevent the links from their default behaviour.
// This will happen whenever the link has a 'data-link' in it.
const navigateTo = (url) => {
	history.pushState(null, null, url);
	router();
};

const router = async () => {
	// Whenever the user go to this 'path' we will run the
	// function which is in the 'view' property.
	const routes = [
		{ path: "/", view: () => console.log("Viewing Home") },
		{ path: "/posts", view: () => console.log("Viewing Posts") },
		{ path: "/settings", view: () => console.log("Viewing Settings") },
	];

	// Loop through each routes to potential match.
	const potentialMatches = routes.map((route) => {
		return {
			route: route,
			// Examine that the current route's path matches with the
			// current location in the browser.
			isMatch: route.path === location.pathname,
		};
	});

	// Find that actual match
	let match = potentialMatches.find(
		(potentialMatch) => potentialMatch.isMatch
	);

	// If there is no match than set 'match' to Home
	if (!match) {
		match = {
			route: routes[0],
			isMatch: true,
		};
	}

	// Run the function which is inside the 'view' property
	console.log(match.route.view());
};

// When the user navigate through the history we need to call 'router()'
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
	// If the user clicks on a link that contains the 'data-link'
	// attribute it will prevent it from it's default behaviour
	// and call the 'nnavigateTo()' function on it's 'href'.
	document.body.addEventListener("click", (e) => {
		if (e.target.matches("[data-link]")) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
	});

	router();
});
