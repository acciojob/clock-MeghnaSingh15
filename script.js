//your JS code here. If required.
let t = document.getElementById("timer");

let currDate = new Date();

setInterval(function() {
	currDate = new Date();
	t.innerHTML = currDate.toLocaleString();
	
},1000)