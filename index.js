import {Model} from "./classes/model.js";
import {View} from "./classes/view.js";
import {Controller} from "./classes/controller.js";
import {DateHelper} from "./classes/date-helper.js";

const dateHelper = new DateHelper();
const model = new Model();
const view = new View(dateHelper);
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
    const dateInput = document.querySelector(".form__date");
    const personalBtn = document.querySelector(".personal");
    const professionalBtn= document.querySelector(".professional");
    const status = document.querySelector(".status__clearCompletedTask");
    console.log(status)
    if (personalBtn.classList.contains("active")) {
        controller.addTask(input.value, "personal", new Date(dateInput.value).getTime());
    } else if (professionalBtn.classList.contains("active")) {
        controller.addTask(input.value, "professional", new Date(dateInput.value).getTime());
    }
});

document.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && e.target.classList.contains("el-delete")) {
        controller.deleteTask(+e.target.parentElement.id);
    } else if (e.target.tagName === "SPAN" && e.target.classList.contains("el-сhange")) {
        controller.editTask(+e.target.parentElement.id)
        const editTask = [...document.querySelectorAll(".editTask")].find((el) => el.id === e.target.parentElement.id)
        editTask.addEventListener("blur", (e) => {
            controller.updateTask(+e.target.parentElement.id, e.target.value);
        })

    } else if (e.target.classList.contains("status__clearCompletedTask")) {
        controller.clearCompletedTasks();
    }
});

document.addEventListener("change", (e) => {
    if (e.target.tagName === "INPUT" && e.target.classList.contains("personalTask__list-el-checkbox")) {
        controller.checkedTask(+e.target.parentElement.id);
    } else if (e.target.tagName === "INPUT" && e.target.classList.contains("professionalTask__list-el-checkbox")) {
        controller.checkedTask(+e.target.parentElement.id);
    }
});

