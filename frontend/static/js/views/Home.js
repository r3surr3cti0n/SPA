import AbstractView from "./AbstractView";

export default class extends AbstractView {
	// The constructor is a special method of a class for
	// creating and initializing an object of that class.
	constructor() {
		this.setTitle("Home");
	}

	async getHtml() {
		return `
            <h1>Home</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                voluptas possimus veniam suscipit in. Voluptatem qui ea repudiandae
                molestias quibusdam, voluptas vero. In quae maxime minus hic
                consectetur commodi ducimus!
            </p>

            <b><a href="/posts">Visit posts</a></b>
        `;
	}
}
