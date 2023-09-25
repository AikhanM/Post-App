export default class View {
  constructor() {
    this.posts = document.querySelector(".posts");
    this.createBtn = document.querySelector(".Btn");
    this.input = document.querySelector(".input");
    this.postHead = document.querySelector(".post-head");
    this.postMain = document.querySelector(".post-main");
    this.postBody = document.querySelector(".post-body");
    this.postComments = document.querySelector(".post-comments");
    this.postTitle = document.querySelector(".title");
    this.postBody = document.querySelector(".body");
    this.backBtn = document.querySelector(".backBtn");
    this.postContainer = document.querySelector(".post-container");
    this.selectedPost = document.querySelector(".selected-post");
  }

  listenerCreateBtn(callback) {
    this.createBtn.addEventListener("click", callback);
  }

  listenerBackBtn(callback) {
    this.backBtn.addEventListener("click", callback);
  }

  changeContainer() {
    this.postContainer.classList.remove("hidden");
    this.selectedPost.classList.add("hidden");
  }

  create() {
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `<i class="fa-solid fa-xmark"></i>
     <p class="postName">${this.input.value}<p>
    `;
  }

  createPost(post, postId) {
    const titleWords = post?.split(" ");
    const editedTitle = `${titleWords.slice(0, 5).join(" ")}...`;
    this.posts.innerHTML += `
              <div class="post"  data-post-id="${postId}">
              <p>${editedTitle}<p>
              <i class="fa-solid fa-xmark"></i>
              </div>
              `;
  }

  deleteListener(callback) {
    const postContainer = document.querySelector(".post-container");

    postContainer.addEventListener("click", (e) => {
    const deleteBtn = e.target.closest("i");
    if (!deleteBtn) return;
    const postId = e.target.closest(".post").getAttribute("data-post-id");
    callback(postId);
    });
  }

  deletePost(postId) {
    const deletedPost = document.querySelector(`[data-post-id="${postId}"] `);
    if (!deletedPost) return;
    if (deletedPost) {
    deletedPost.remove();
    }
  }

  postClickListener(callback) {
    const postContainer = document.querySelector(".post-container");
    const selectedPost = document.querySelector(".selected-post");
    postContainer.addEventListener("click", (e) => {
    const post = e.target.closest(".post");
    const deleteBtn = e.target.closest("i");
    if (!post || deleteBtn) return;
    postContainer.classList.add("hidden");
    selectedPost.classList.remove("hidden");
    callback(post.getAttribute("data-post-id"));
    });
  }

  getPostData(title, body) {
    this.postTitle.innerText = title;
    this.postBody.innerText = body;
  }

  addComments(name, email, comment) {
    const html = `
      <div class="comment">
       <p>${name} / ${email}</p>
       <p>${comment}</p>
      </div> 
    `;
    this.postComments.insertAdjacentHTML("beforeend", html);
  }

  clearPostData() {
    this.postTitle.innerHTML = null;
    this.postBody.innerHTML = null;
    this.postComments.innerHTML = null;
  }
}
