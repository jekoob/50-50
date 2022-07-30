const circle = document.getElementsByClassName("outerContainer")[0];
const article = document.getElementById("article");
const nav = document.getElementsByTagName("nav")[0];
circle.addEventListener("click",(event)=>{
	
	let state = circle.getAttribute("name");
	if(state === "menu"){

		circle.classList.add("spin");
		article.classList.add("slide");
		circle.setAttribute("name","close");
		nav.classList.add("translate");
	}
	else{
	circle.classList.remove("spin");
	circle.setAttribute("name","menu");
	article.classList.remove("slide");
	nav.classList.remove("translate");
	}
});