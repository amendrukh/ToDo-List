class Controller {
    view;
    model;

    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    addTask(value, type) {
        this.model.addTask(value, type);
        this.render();
    }

    deleteTask(taskId) {
        this.model.deleteTasks(taskId);
        this.render();
    }

    editTask(idTask) {
        this.view.editTask(idTask);
    }

    updateTask(idTask, value) {
        this.model.updateTask(idTask, value);
    }

    checkedTask(taskId) {
        this.model.checkedTask(taskId);
        this.render();
    }

    clearCompletedTasks() {
        this.model.clearCompletedTasks();
        this.render();
    }

    render() {
        this.view.show(this.model.getTasks());
    }
}

export {Controller};