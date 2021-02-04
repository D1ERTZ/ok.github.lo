const cardButton = document.querySelector("#card-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cardButton.addEventListener("click", function(event) {
	console.log("ТЫ ПОЙМАН ЗА РУКУ КАК ВОР, ТЫ ПРОИГРАЛ")
	modal.classList.add("is-open");

});

close.addEventListener("click", function(event) {
	modal.classList.remove("is-open");

});