class Controller {
    view;
    model;

    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    addTask(value) {
        this.model.addTask(value);
        this.render();
    }

    deleteTask(taskId) {
        this.model.deleteTasks(taskId);
        this.render();
    }

    checkedTask(taskId) {
        this.model.checkedTask(taskId);
        this.render();
    }

    render() {
        this.view.show(this.model.getTasks());
    }
}

export {Controller};