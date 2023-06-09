import {Task} from "./task.js";

class Model {
    tasks = [];

    getTasks() {
        return this.tasks;
    };

    addTask(value, type) {
        let task;
        const id = this.tasks.length === 0 ? 1 : this.tasks[this.tasks.length - 1].id + 1;
        if (type === "personal") {
            task = new Task(id, value, false, "personal");
        } else if (type === "professional") {
            task = new Task(id, value, false, "professional");
        } else {
            return;
        }
        this.tasks.push(task);
    };

    checkedTask(taskId) {
        this.tasks = this.tasks.map((el) => {
            if (el.id === taskId) {
                el.isDone = !el.isDone;
            }
            return el;
        });

    }

    deleteTasks(taskId) {
        this.tasks = this.tasks.filter((el) => el.id !== taskId);
    };
}

export {Model};