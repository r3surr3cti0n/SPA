import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	// The constructor is a special method of a class for
	// creating and initializing an object of that class.
	constructor() {
		// The super constructor is very important!
		super();
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

            <a class="link" href="/posts" data-link>Visit posts<i class="fas fa-chevron-right right"></i></a>
        `;
	}
}
