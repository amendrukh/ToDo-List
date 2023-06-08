class View {
    show(tasks) {
        const windowPersonalTask = document.querySelector(".personalTask");
        const input = document.querySelector(".form__input");
        const lackOfTasks = document.createElement("span");
        const list = document.createElement("ul");
        lackOfTasks.classList.add("lackOfTasks");
        lackOfTasks.innerText = "No tasks..";
        windowPersonalTask.innerHTML = "";
        if (tasks.length === 0) {
            return windowPersonalTask.append(lackOfTasks);
        }
        for (let task of tasks) {
            list.classList.add("personalTask__list");
            list.insertAdjacentHTML("beforeend", `<li id = ${task.id} class="personalTask__list-el">
                <input class="personalTask__list-el-checkbox" type="checkbox" id="scales" name="scales" ${task.isDone ? 'checked' : ''}>
                <label for="scales" ${task.isDone ? 'class="completed"' : ''}>${task.value}</label>
                <span class="el-delete"></span>
            </li><span class="line"></span>`);
        }
        windowPersonalTask.append(list);
        input.value = "";
    }
}

export {View};