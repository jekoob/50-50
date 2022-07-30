const searchInput = document.getElementById("searchField");
const searchBtn = document.getElementById("searchBtn");
const div = document.getElementsByTagName("div")[0];

function expandInput(){
	
	div.classList.toggle("active");
	setTimeout(()=>{
		searchInput.focus();
	},800);
}