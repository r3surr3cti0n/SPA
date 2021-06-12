import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("404: Not Found");
	}

	async getHtml() {
		return `
            <h1>404</h1>
            <p>The page you are looking for is not found.</p>
        `;
	}
}
