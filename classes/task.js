class Task {
    id;
    value;
    isDone;
    type;

    constructor(id, value, isDone, type) {
        this.id = id;
        this.value = value;
        this.isDone = isDone;
        this.type = type;
    }
}

export {Task};