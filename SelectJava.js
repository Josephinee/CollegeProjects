var florida = 0;
var australia = 0;
var disney = 0;
var switzerland = 0;
var dubai = 0;
var trabolgan = 0;
var butlins = 0;






function myFunction() {
    var x = document.getElementById("mySelect").value;


if(x===("Yes")){

	
  australia++;
  switzerland++  
  


document.getElementById("mySelect").disabled=true;

}

else if(x===("No")){
disney++;


document.getElementById("mySelect").disabled=true;

}

else if(x===("Indifferent")){
    florida++
	dubai++


document.getElementById("mySelect").disabled=true;
}

//none question
document.getElementById('1').style.display = 'none'; //show it
document.getElementById('mySelect').style.display = 'none'; //show it

//reveal question 
document.getElementById('2').style.display = 'block'; //show it
document.getElementById('mySelect2').style.display = 'block'; //show it

}


function myFunction2() {

    var x = document.getElementById("mySelect2").value;
  
	
if(x===("Yes")){

	florida++
	dubai++
    disney++;

document.getElementById("mySelect2").disabled=true;

}

else if(x===("No")){
australia++;
  switzerland++ 

document.getElementById("mySelect2").disabled=true;
}
//none question 
document.getElementById('2').style.display = 'none'; //none it
document.getElementById('mySelect2').style.display = 'none'; //none it

//reveal question 
document.getElementById('3').style.display = 'block'; //show it
document.getElementById('mySelect3').style.display = 'block'; //show it
}


function myFunction3() {

    var x = document.getElementById("mySelect3").value;
  
	
if(x===("Yes")){

	florida++
	dubai++
    
	australia++;

document.getElementById("mySelect3").disabled=true;

}

else if(x===("No")){
 disney++;
  switzerland++ 
document.getElementById("mySelect3").disabled=true;

}
//none question 
document.getElementById('3').style.display = 'none'; //none it
document.getElementById('mySelect3').style.display = 'none'; //none it

//reveal question 
document.getElementById('4').style.display = 'block'; //show it
document.getElementById('mySelect4').style.display = 'block'; //show it
}


function myFunction4() {

    var x = document.getElementById("mySelect4").value;
  
	
if(x===("Yes")){

	
	dubai=dubai+2;
    
	australia=australia+2;
document.getElementById("mySelect4").disabled=true;
	/*
document.getElementById("p1").innerHTML = "You selected: disney " + disney;
document.getElementById("p2").innerHTML = "You selected: florida "+florida;
document.getElementById("p3").innerHTML = "You selected: australia "+australia;
document.getElementById("p4").innerHTML = "You selected: switzerland "+switzerland;
document.getElementById("p5").innerHTML = "You selected: dubai "+dubai;  */

if (disney>=3 || florida>=3){
document.getElementById('4').style.display = 'none'; //none it
document.getElementById('mySelect4').style.display = 'none'; //none it

document.getElementById('hiddenp').style.display = 'block'; //show it
document.getElementById('mySelect5').style.display = 'block'; //show it
}
else if (australia >=3 || switzerland >=3){
document.getElementById('4').style.display = 'none'; //none it
document.getElementById('mySelect4').style.display = 'none'; //none it

document.getElementById('hiddenp3').style.display = 'block'; //show it
document.getElementById('mySelect7').style.display = 'block'; //show it
}
else if (dubai >3){
window.location.href = 'AbuDhabi.html';
}
}

else if(x===("No")){
florida=florida+2;
 disney=disney+2;
  switzerland=switzerland+2
  document.getElementById("mySelect4").disabled=true;

 /* 
document.getElementById("p1").innerHTML = "You selected: disney " + disney;
document.getElementById("p2").innerHTML = "You selected: florida "+florida;
document.getElementById("p3").innerHTML = "You selected: australia "+australia;
document.getElementById("p4").innerHTML = "You selected: switzerland "+switzerland;
document.getElementById("p5").innerHTML = "You selected: dubai "+dubai; */

if (disney>=3 || florida>=3){
document.getElementById('4').style.display = 'none'; //hide it
document.getElementById('mySelect4').style.display = 'none'; //hide it

document.getElementById('hiddenp').style.display = 'block'; //show it
document.getElementById('mySelect5').style.display = 'block'; //show it
}
else if (australia >=3 || switzerland >=3){
document.getElementById('4').style.display = 'none'; //hide it
document.getElementById('mySelect4').style.display = 'none'; //hide it

document.getElementById('hiddenp3').style.display = 'block'; //show it
document.getElementById('mySelect7').style.display = 'block'; //show it
}

}
}



function myFunction5() {

    var x = document.getElementById("mySelect5").value;
  
	
if(x===("Yes")){

	florida = florida+2;
	disney = disney+2;
	dubai = dubai-3;
    switzerland = switzerland-3;
	australia = australia-3;
	
	document.getElementById("mySelect5").disabled=true;

if (florida > disney){
						
						window.location.href = 'Florida.html';
						}
						else if (disney > florida){
						
						window.location.href = 'DisneyLand.html';
						}
						else if(disney === florida){
						
						document.getElementById('hiddenp').style.display = 'none'; //hide it
document.getElementById('mySelect5').style.display = 'none'; //hide it

						document.getElementById('hiddenp2').style.display = 'block'; //show it
						document.getElementById('mySelect6').style.display = 'block'; //show it
						
						}

}

else if(x===("No")){
florida = florida-3;
	disney = disney-3;
	dubai = dubai+2;
    switzerland = switzerland+2;
	australia = australia+2; 
	document.getElementById("mySelect5").disabled=true;

	if (australia >=3 || switzerland >=3){
	document.getElementById('hiddenp').style.display = 'none'; //hide it
document.getElementById('mySelect5').style.display = 'none'; //hide it
	
document.getElementById('hiddenp3/2').style.display = 'block'; //show it
document.getElementById('mySelect7').style.display = 'block'; //show it
}

}
}

function myFunction6() {

    var x = document.getElementById("mySelect6").value;
  
	
if(x===("hot")){

	window.location.href = 'Florida.html';



}

else if(x===("cold")){
window.location.href = 'DisneyLand.html';


}
}

function myFunction7() {

    var x = document.getElementById("mySelect7").value;
  
	
if(x===("hot")){
document.getElementById("mySelect7").disabled=true;
	if (australia === dubai){
	document.getElementById('hiddenp3').style.display = 'none'; //hide it
	document.getElementById('hiddenp3/2').style.display = 'none'; //hide it
    document.getElementById('mySelect7').style.display = 'none'; //hide it
	
	document.getElementById('hiddenp4').style.display = 'block'; //show it
	document.getElementById('mySelect8').style.display = 'block'; //show it
	}
	else if(australia>dubai){
			window.location.href = 'Australia.html';
			}
			else if(dubai>australia){
			window.location.href = 'AbuDhabi.html';
			}



}

else if(x===("cold")){
window.location.href = 'Switzerland.html';


}
}

function myFunction8() {

    var x = document.getElementById("mySelect8").value;
  
	
if(x===("Yes")){

	window.location.href = 'Australia.html';



}

else if(x===("No")){
window.location.href = 'AbuDhabi.html';


}
}

function myAmount() {
var x = document.getElementById("amount").value;
if(x===("more")){
document.getElementById('1').style.display = 'block'; //show it
    document.getElementById('mySelect').style.display = 'block'; //show it
	
	document.getElementById('cost').style.display = 'none'; //hide it
	document.getElementById('amount').style.display = 'none'; //hide it
}
else if(x===("less")){
document.getElementById('less1').style.display = 'block'; //show it
    document.getElementById('lessmySelect').style.display = 'block'; //show it
	
	document.getElementById('cost').style.display = 'none'; //hide it
	document.getElementById('amount').style.display = 'none'; //hide it
}

}

function myFunctionless() {
    var x = document.getElementById("lessmySelect").value;


if(x===("Yes")){

	
trabolgan=trabolgan+2;
  


document.getElementById("mySelect").disabled=true;

}

else if(x===("No")){
butlins=butlins+2;


document.getElementById("mySelect").disabled=true;

}

else if(x===("Indifferent")){
    switzerland=switzerland+2;
	


document.getElementById("lessmySelect").disabled=true;
}

//none question
document.getElementById('less1').style.display = 'none'; //show it
document.getElementById('lessmySelect').style.display = 'none'; //show it

//reveal question 
document.getElementById('less2').style.display = 'block'; //show it
document.getElementById('lessmySelect2').style.display = 'block'; //show it

}

function myFunctionless2() {

    var x = document.getElementById("lessmySelect2").value;
  
	
if(x===("Yes")){

	butlins=butlins+1;
	trabolgan=trabolgan+1;

}

else if(x===("No")){
switzerland=switzerland+1;
}

//none question
document.getElementById('less2').style.display = 'none'; //show it
document.getElementById('lessmySelect2').style.display = 'none'; //show it

//reveal question 
document.getElementById('less3').style.display = 'block'; //show it
document.getElementById('lessmySelect3').style.display = 'block'; //show it
}


function myFunctionless3() {

    var x = document.getElementById("lessmySelect3").value;
  
	
if(x===("boat")){

	butlins=butlins+2;
	trabolgan=trabolgan+2;

}

else if(x===("fly")){
switzerland=switzerland+2;
}

if (switzerland>2){
window.location.href = 'Switzerland.html';
}
else if (butlins>trabolgan){
window.location.href = 'Butlins.html';
}
else if (trabolgan>butlins){
window.location.href = 'Trabolgan.html';
}
else if (trabolgan===butlins){
//none question
document.getElementById('less3').style.display = 'none'; //show it
document.getElementById('lessmySelect3').style.display = 'none'; //show it

//reveal question 
document.getElementById('less4').style.display = 'block'; //show it
document.getElementById('lessmySelect4').style.display = 'block'; //show it
}
}

function myFunctionless4() {

    var x = document.getElementById("lessmySelect4").value;
  
	
if(x===("euros")){

window.location.href = 'Trabolgan.html';

}

else if(x===("pounds")){
window.location.href = 'Butlins.html';
}


}




















