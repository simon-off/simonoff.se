const wrapper = document.getElementById("wrapper");

wrapper.addEventListener("click", () => {
	if (wrapper.style.backgroundColor == "white") {
		console.log(wrapper.style.backgroundColor);
		wrapper.style.backgroundColor = "black";
		return;
	}
	wrapper.style.backgroundColor = "white";
});
