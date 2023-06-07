class Model {
    toDoList = [];

    getToDoList() {
        return this.toDoList;
    }

    addToDo(value) {
        const id = this.toDoList.length === 0 ? 1 : this.toDoList[this.toDoList.length - 1].id + 1;
        this.toDoList.push({
            id,
            value
        });
    }

    deleteToDo(taskId) {
        console.log(taskId)
        console.log(this.toDoList)
        this.toDoList = this.toDoList.filter((el) => el.id !== taskId);
        console.log(this.toDoList)
    }
}

class View {
    show(toDoList) {
        const windowPersonalTask = document.querySelector(".personalTask");
        const input = document.querySelector(".form__input");
            windowPersonalTask.innerHTML = "";
            for (let task of toDoList) {
                    windowPersonalTask.insertAdjacentHTML("beforeend", `<li id = ${task.id} class="personalTask__list-el">
                <input class="personalTask__list-el-checkbox" type="checkbox" id="scales" name="scales" checked>
                <label for="scales">${task.value}</label>
                <span class="el-delete"></span>
            </li><span class="line"></span>`);
        }
            input.value = "";
    }
}

class Controller {
    view;
    model;
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    addTask(value) {
        this.model.addToDo(value);
        this.render();
    }

    deleteTask(taskId) {
        this.model.deleteToDo(taskId);
        this.render();
    }

    render() {
        this.view.show(this.model.getToDoList());
    }
}

const model = new Model();
const view = new View();
const controller = new Controller(view, model);

document.addEventListener("DOMContentLoaded", (e) => {
    controller.render();
});

document.querySelector(".add__button").addEventListener("click", (e) => {
    e.preventDefault();
    const input = document.querySelector(".form__input");
    controller.addTask(input.value)

})

document.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && e.target.classList.contains("el-delete")) {
        controller.deleteTask(+e.target.parentElement.id)
    }

})