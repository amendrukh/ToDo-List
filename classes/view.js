class View {

    show(tasks) {
        const personalTask = document.querySelector(".personalTask");
        const professionalTask = document.querySelector(".professionalTask");
        const lackOfTasks = document.querySelector(".lackOfTasks");
        const input = document.querySelector(".form__input");
        const listPersonal = document.createElement("ul");
        const listProfessional = document.createElement("ul");
        if (tasks.length === 0) {
            personalTask.innerHTML = "";
            professionalTask.innerHTML = "";
            return lackOfTasks.style.display = "inline-block";
        }
        personalTask.innerHTML = "";
        professionalTask.innerHTML = "";
        lackOfTasks.style.display = "none";

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
        li.classList.add(`${task.type}Task__list-el`);
        li.innerHTML = `<input ${task.type ? `class="${task.type}Task__list-el-checkbox"` : ''} type="checkbox" id="scales" name="scales" ${task.isDone ? 'checked' : ''}>
                <label for="scales" ${task.isDone ? 'class="completed"' : ''}>${task.value}</label>
                <span class="el-delete"></span>
             </li><span class="line"></span>`;
        return li;
    };

}

export {View};