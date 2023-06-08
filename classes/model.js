import {Task} from "./task.js";

class Model {
    tasks = [];

    getTasks() {
        return this.tasks;
    }

    addTask(value) {
        const id = this.tasks.length === 0 ? 1 : this.tasks[this.tasks.length - 1].id + 1;
        const task = new Task(id, value, false);
        this.tasks.push(task);
    }

    checkedTask(taskId) {
        this.tasks.map((el) => el.id !== taskId ? el.isDone = !el.isDone : false);
    }

    deleteTasks(taskId) {
        this.tasks = this.tasks.filter((el) => el.id !== taskId);
    }
}

export {Model};