let num =0;
const bg=document.querySelector(".bg"); 
const loadCaount = document.querySelector(".loadCount"); 


function load(){
	num++;
	if(num==100){
		clearInterval(inter);
	}
	loadCaount.innerHTML=num+" %";
	console.log(num);
	loadCaount.style.opacity=1-(num*0.01);
	bg.style.filter="blur("+(30-(num*0.3))+"px)";
}

let inter = setInterval(load,30);