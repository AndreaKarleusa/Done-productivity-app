const list = document.querySelector("ul")
const input = document.querySelector("input")
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const task = document.createElement("li");
    const removeButton = document.createElement("button");

    removeButton.classList.add("remove-btn")
    removeButton.innerHTML = "X";

    task.innerHTML = input.value;
    task.appendChild(removeButton);
    list.appendChild(task);

    input.value = "";
});

list.addEventListener("click", e => {
    const item = e.target;

    if (item.classList[0] == "remove-btn") {
        const task = item.parentElement;
        task.remove(task);
    }

});

document.addEventListener("DOMContentLoaded", () => {
    console.log("hello");
});