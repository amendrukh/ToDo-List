import {Model} from "./classes/model.js";
import {View} from "./classes/view.js";
import {Controller} from "./classes/controller.js";

const model = new Model();
const view = new View();
const controller = new Controller(view, model);

document.addEventListener("DOMContentLoaded", () => {
    controller.render();
});

document.addEventListener("click", (e) => {
    const personalBtn = document.querySelector(".personal");
    const personalTasks = document.querySelector(".personalTask");
    const professionalBtn = document.querySelector(".professional");
    const professionalTasks = document.querySelector(".professionalTask");

    if (e.target.innerText === "Personal") {
        personalBtn.classList.add("active");
        personalTasks.classList.add("active");
        professionalTasks.classList.remove("active");
        professionalBtn.classList.remove("active");
    } else if (e.target.innerText === "Professional") {
        professionalBtn.classList.add("active");
        professionalTasks.classList.add("active");
        personalTasks.classList.remove("active");
        personalBtn.classList.remove("active");
    }
})

document.querySelector(".add__button").addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector(".form__input");
    const personalBtn = document.querySelector(".personal");
    const professionalBtn= document.querySelector(".professional");
    if (personalBtn.classList.contains("active")) {
        controller.addTask(input.value, "personal");
    } else if (professionalBtn.classList.contains("active")) {
        controller.addTask(input.value, "professional");
    }
});

document.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && e.target.classList.contains("el-delete")) {
        controller.deleteTask(+e.target.parentElement.id);
    }
});

document.addEventListener("change", (e) => {
    if (e.target.tagName === "INPUT" && e.target.classList.contains("personalTask__list-el-checkbox")) {
        controller.checkedTask(+e.target.parentElement.id);
    } else if (e.target.tagName === "INPUT" && e.target.classList.contains("professionalTask__list-el-checkbox")) {
        controller.checkedTask(+e.target.parentElement.id);
    }
});

