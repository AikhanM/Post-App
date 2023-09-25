export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.listenerCreateBtn(() => {
      this.view.create();
    });

    this.model.getPosts((post, postId) => {
      this.view.createPost(post, postId);
    });

    this.view.postClickListener((postId) => {
      this.model.openPost(postId, (title, body) => {
        this.view.getPostData(title, body);
      });

    this.model.showComments(postId, (name, email, comment) => {
      this.view.addComments(name, email, comment);
      });
    });

    this.view.deleteListener((postId) =>
      this.model.deletePosts(postId, this.view.deletePost.bind(this.view))
    );

    this.view.listenerBackBtn(() => {
      this.view.changeContainer();
    });
  }
}
