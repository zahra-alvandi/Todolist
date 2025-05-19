const openModalBtn = document.querySelector(".open-modal-button");
const modalScreen = document.querySelector(".modal-screen");
const creatElem = document.querySelector(".create");
const todosContainer = document.querySelector(".todos-container");
const inputCard = document.querySelector(".input-card");
const cancelElem = document.querySelector(".cancel");

openModalBtn.addEventListener("click", function () {
    modalScreen.classList.remove("hidden");

    creatElem.addEventListener("click", function () {
        let userTodoTitle = inputCard.value;
        todosContainer.innerHTML = userTodoTitle;
    });

    cancelElem.addEventListener("click", function () {
        modalScreen.classList.add("hidden");
    });
});