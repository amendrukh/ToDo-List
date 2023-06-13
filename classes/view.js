class View {
    dateHelper;

    constructor(dateHelper) {
        this.dateHelper = dateHelper;
    }

    show(tasks) {
        const personalTask = document.querySelector(".personalTask");
        const professionalTask = document.querySelector(".professionalTask");
        const lackOfTasks = document.querySelector(".lackOfTasks");
        const input = document.querySelector(".form__input");
        const clearCompletedTasksBtn = document.querySelector(".containerTask__status")
        const listPersonal = document.createElement("ul");
        const listProfessional = document.createElement("ul");
        if (tasks.length === 0) {
            personalTask.innerHTML = "";
            professionalTask.innerHTML = "";
            clearCompletedTasksBtn.style.display = "none";
            return lackOfTasks.style.display = "inline-block";
        }
        personalTask.innerHTML = "";
        professionalTask.innerHTML = "";
        lackOfTasks.style.display = "none";
        clearCompletedTasksBtn.style.display = "inline-block";

        for (let task of tasks) {
            let item = this.createTask(task);
            if (item.classList.contains("personalTask__list-el")) {
                listPersonal.classList.add(`personalTask__list`);
                listPersonal.append(item);
                personalTask.append(listPersonal);
            } else if (item.classList.contains("professionalTask__list-el")) {
                listProfessional.classList.add(`professionalTask__list`);
                listProfessional.append(item);
                professionalTask.append(listProfessional);
            }
        }
        input.value = "";
    };

    createTask(task) {
        const li = document.createElement("li");
        li.id = task.id;
        li.dataset.edit = "false";
        li.classList.add(`${task.type}Task__list-el`);
        li.innerHTML = `<input ${task.type ? `class="${task.type}Task__list-el-checkbox"` : ''} type="checkbox" id="scales" name="scales" ${task.isDone ? 'checked' : ''}>
                <label for="scales" ${task.isDone ? 'class="completed"' : ''}>${task.value}</label>
                <span class="task-date ${this.dateHelper.isDateExpired(task.date) ? 'overdue-tasks' : ''}">
                    ${this.dateHelper.getFormattedDate(task.date)}
                </span>
                <span class="el-сhange"></span>
                <span class="el-delete"></span>
             </li><span class="line"></span>`;
        return li;
    };

    editTask(idTask) {
        const task = document.getElementById(idTask);
        const labelTask = [...task.children].find((el) => el.tagName === "LABEL");
        const inputTask = document.createElement("input");
        inputTask.type = "text";
        inputTask.name = "editTask";
        inputTask.id = idTask;
        inputTask.classList.add("editTask");
        inputTask.setAttribute("autofocus", "autofocus");
        inputTask.innerText = labelTask.innerText;
        return task.replaceChild(inputTask, labelTask);
    }
}

export {View};