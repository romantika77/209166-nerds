	var link = document.querySelector(".feedback");
	var popup = document.querySelector(".modal-feedback");
	var close = popup.querySelector(".modal-close");

	var form = popup.querySelector("form");
	var login = popup.querySelector("[name=fullname]");
	var mail = popup.querySelector("[name=email]");

	var storage = localStorage.getItem("login");

	link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("modal-feedback-show");

		if (storage) {
			login.value = storage;
			password.focus();
		} else {
			login.focus();
		}
	});

	close.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("modal-feedback-show");
		popup.classList.remove("modal-error");
	});

	form.addEventListener("submit", function(event) {
		if (!login.value || !mail.value) {
			event.preventDefault();
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error"); 
		} else {
			localStorage.setItem("login", login.value);
		}
	});

	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (popup.classList.contains("modal-feedback-show")) {
				popup.classList.remove("modal-feedback-show");
				popup.classList.remove("modal-error");
			}
		}
	});