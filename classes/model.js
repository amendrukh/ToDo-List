import {Task} from "./task.js";

class Model {
    tasks = [];

    constructor() {
        if (!localStorage.getItem("tasks")) {
            this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        }
    }

    getTasks() {
       const tasks = JSON.parse(localStorage.getItem("tasks"));
       if (!Array.isArray(tasks)) {
           return [];
       }
       return tasks;
    };

    save(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    addTask(value, type) {
        const tasks = this.getTasks();
        let task;
        const id = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;
        if (type === "personal") {
            task = new Task(id, value, false, "personal");
        } else if (type === "professional") {
            task = new Task(id, value, false, "professional");
        } else {
            return;
        }
        tasks.push(task);
        this.save(tasks);
    };

    checkedTask(taskId) {
        let tasks = this.getTasks();
        tasks = tasks.map((el) => {
            if (el.id === taskId) {
                el.isDone = !el.isDone;
            }
            return el;
        });
        this.save(tasks);
    }

    deleteTasks(taskId) {
        let tasks = this.getTasks();
        tasks = tasks.filter((el) => el.id !== taskId);
        this.save(tasks);
    };

    clearCompletedTasks() {
        let tasks = this.getTasks();
        tasks = tasks.filter((el) => el.isDone !== true);
        this.save(tasks);
    }

    updateTask(idTask, value) {
        let tasks = this.getTasks();
        tasks = tasks.map((el) => {
            if (el.id === idTask) {
                el.value = value;
            }
            return el;
        })
        this.save(tasks);
    }
}

export {Model};