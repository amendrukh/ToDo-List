import {Model} from "./classes/model.js";
import {View} from "./classes/view.js";
import {Controller} from "./classes/controller.js";

const model = new Model();
const view = new View();
const controller = new Controller(view, model);

document.addEventListener("DOMContentLoaded", () => {
    controller.render();
});

document.querySelector(".add__button").addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector(".form__input");
    controller.addTask(input.value);

});

document.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && e.target.classList.contains("el-delete")) {
        controller.deleteTask(+e.target.parentElement.id);
    }
});

document.addEventListener("change", (e) => {
    if (e.target.tagName === "INPUT" && e.target.classList.contains("personalTask__list-el-checkbox")) {
        controller.checkedTask(e.target.parentElement.id);
    }
});

