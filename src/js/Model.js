export default class Model {
  constructor() {
    this.API = "https://jsonplaceholder.typicode.com/";
  }

  async getPosts(callback) {
    try {
      const api = await fetch(`${this.API}posts`);
      const data = await api.json();
      const result = data.slice(0, 10);
      result.forEach((post) => callback(post.title, post.id, false));
    } catch {
      callback(null, true);
    }
  }

  async deletePosts(postId, callback) {
    try {
      const api = await fetch(`${this.API}posts/${postId}`, {
        method: "DELETE",
      });
      if (api.ok) {
        callback(postId);
      }
    } catch {
      throw new Error("Unexpected error occured!");
    }
  }

  async openPost(postId, callback) {
    try {
      const api = await fetch(`${this.API}posts/${postId}`);
      const data = await api.json();
      callback(data.title, data.body);
    } catch {
      throw new Error("Unexpected error occured");
    }
  }

  async showComments(postId, callback) {
    try {
      const api = await fetch(`${this.API}comments`);
      const data = await api.json();
      const postComments = data.filter((post) => post.postId === +postId);

      postComments.forEach((comment) =>
        callback(comment.name, comment.email, comment.body)
      );
    } catch {
      throw new Error("Unexpected error occured!");
    }
  }
}
