import "./less/index.less";

// Your code goes here!

///"click" event start///
function change(e) {
	let el = e.target;
	if (el.style.border === "3px solid red") {
		el.style.border = "none";
	} else {
		el.style.border = "3px solid red";
	}
}

window.addEventListener("click", change);

window.onclick = function (e) {
	console.log(e.target);
};
///"click" event end///

///"mouseover" event start///
function imgHover(e) {
	let el = e.target;
	if (el.style.border === "5px solid blue") {
		el.style.border = "none";
	} else {
		el.style.border = "5px solid blue";
	}
}

const imgs = document.getElementsByClassName("img-content");

///"mouseover" event end///
