import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
	constructor() {
		super();
		this.setTitle("Posts");
	}

	async getHtml() {
		return `
            <h1>Posts</h1>

            <div id="posts">
                <div class="post">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur cumque laudantium, veniam a eveniet qui deserunt
                    laborum? Quis odit ullam voluptas reiciendis, nobis eveniet
                    provident, libero, dignissimos tempore optio sapiente?

                    <a href="/blog1" data-link>Blog1</a>    
                 </div>
                <div class="post">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur cumque laudantium, veniam a eveniet qui deserunt
                    laborum? Quis odit ullam voluptas reiciendis, nobis eveniet
                    provident, libero, dignissimos tempore optio sapiente?
                
                    <a href="/blog2" data-link>Blog2</a>
                </div>
                <div class="post">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur cumque laudantium, veniam a eveniet qui deserunt
                    laborum? Quis odit ullam voluptas reiciendis, nobis eveniet
                    provident, libero, dignissimos tempore optio sapiente?

                    <a href="/blog3" data-link>Blog3</a>
                </div>
            </div>
        `;
	}
}
