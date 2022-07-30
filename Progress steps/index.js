let indexStep = 1;
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementsByClassName("progress")[0];

function moveForword(){
	// if(indexStep===1){
	// 	prevBtn.style.backgroundColor="#3498db";
	// 	prevBtn.disabled=false;
	// }	
	indexStep++;
	if(indexStep>circles.length-1){
		indexStep=circles.length;
	}
	update();
	//progress.style.width=(circles.length-1)/(active.length)*10+"%"
}

function moveBack(){
	// if(indexStep==2){
	// 	prevBtn.style.backgroundColor="#e0e0e0";
	// 	prevBtn.disabled=true;
	// }
		indexStep--;
		update();
}
function update(){
	circles.forEach((circle,indx)=>{
		if(indx<indexStep){
			circle.classList.add("active");
		}
		else{
			circle.classList.remove("active");
		}

	});
	const active = document.querySelectorAll(".active");
	 progress.style.width= ((active.length-1)/(circles.length-1))*100+"%";

	 if(indexStep===1){
	 	prevBtn.disabled=true;
	 }else if(indexStep===circles.length){
	 	nextBtn.disabled=true;
	 }else{
	 	nextBtn.disabled=false;
	 	prevBtn.disabled=false;
	 }
	 console.log(circles.length,indexStep);
}