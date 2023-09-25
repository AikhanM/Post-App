import View from "./View.js";
import Model from "./Model.js";
import Controller from "./Controller.js";
import "../css/style.scss";

window.addEventListener("DOMContentLoaded", function () {
  const model = new Model();
  const view = new View();
  const controller = new Controller(model, view);
  controller.init();
});

window.addEventListener("DOMContentLoaded", initialize)

