const openModalBtn = document.querySelector(".open-modal-button");
const modalScreen = document.querySelector(".modal-screen");
const creatElem = document.querySelector(".create");
const todosContainer = document.querySelector(".todos-container");
const inputCard = document.querySelector(".input-card");
const cancelElem = document.querySelector(".cancel");
const closeModalX = document.querySelector(".close-modal-x");
const inputElem = document.querySelector(".input")

openModalBtn.addEventListener("click", function () {
    modalScreen.classList.remove("hidden");
});

creatElem.addEventListener("click", function () {
    let userTodoTitle = inputElem.value;
    todosContainer.textContent = userTodoTitle;
});

cancelElem.addEventListener("click", function () {
    modalScreen.classList.add("hidden");
});

closeModalX.addEventListener("click", function () {
    modalScreen.classList.add("hidden");
});