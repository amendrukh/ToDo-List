class Task {
    id;
    date;
    value;
    isDone;
    type;

    constructor(id,date, value, isDone, type) {
        this.id = id;
        this.date = date;
        this.value = value;
        this.isDone = isDone;
        this.type = type;
    }
}

export {Task};