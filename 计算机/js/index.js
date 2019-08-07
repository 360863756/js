var num1=0;
var num2=0;
function fun0(){
	var i =Number(document.getElementById("num0").value);
	document.getElementById("count").value+=i;
}
function fun1(){
	var i =Number(document.getElementById("num1").value);
	document.getElementById("count").value+=i;
}
function fun2(){
	var i =Number(document.getElementById("num2").value);
	document.getElementById("count").value+=i;
}
function fun3(){
	var i =Number(document.getElementById("num3").value);
	document.getElementById("count").value+=i;
}
function fun4(){
	var i =Number(document.getElementById("num4").value);
	document.getElementById("count").value+=i;
}
function fun5(){
	var i =Number(document.getElementById("num5").value);
	document.getElementById("count").value+=i;
}
function fun6(){
	var i =Number(document.getElementById("num6").value);
	document.getElementById("count").value+=i;
}
function fun7(){
	var i =Number(document.getElementById("num7").value);
	document.getElementById("count").value+=i;
}
function fun8(){
	var i =Number(document.getElementById("num8").value);
	document.getElementById("count").value+=i;
}
function fun9(){
	var i =Number(document.getElementById("num9").value);
	document.getElementById("count").value+=i;
}
function fun10(){
	var i =document.getElementById("num10").value;
	document.getElementById("count").value+=i;
}
function fun(){
	num1+=Number(document.getElementById("count").value);
	document.getElementById("count").value="";
}
function funA(){
	num2=Number(document.getElementById("count").value);
	document.getElementById("count").value= (num1+num2).toFixed(2);
}
function func(){
	location.reload();
}