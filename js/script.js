function load(){
	setTimeout(func, 0);
}
function func() {
    document.querySelector('#loader').style.display = 'none';
}
function changeVal(){

	document.querySelector('#value').value=op1.value;
	document.querySelector('#value2').value=opb1.value;

	if(option.value=="Angle"){
		op1.innerHTML= "Degree";
		op2.innerHTML= "Radian";
		op3.innerHTML= "Minutes";
		op4.innerHTML= "Seconds";
		op5.innerHTML= "Revolution";

		//Setting Visibility
		document.querySelector('#op1').style.display = 'block';
		document.querySelector('#op2').style.display = 'block';
		document.querySelector('#op3').style.display = 'block';
		document.querySelector('#op4').style.display = 'block';
		document.querySelector('#op5').style.display = 'block';

		document.querySelector('#op6').style.display = 'none';

		opb1.innerHTML= "Degree";
		opb2.innerHTML= "Radian";
		opb3.innerHTML= "Minutes";
		opb4.innerHTML= "Seconds";
		opb5.innerHTML= "Revolution";

		//Setting Visibility
		document.querySelector('#opb1').style.display = 'block';
		document.querySelector('#opb2').style.display = 'block';
		document.querySelector('#opb3').style.display = 'block';
		document.querySelector('#opb4').style.display = 'block';
		document.querySelector('#opb5').style.display = 'block';

		document.querySelector('#opb6').style.display = 'none';
	}
	if(option.value=="Data"){
		op1.innerHTML= "Bit";
		op2.innerHTML= "Byte";
		op3.innerHTML= "Kilobyte";
		op4.innerHTML= "Megabyte";
		op5.innerHTML= "Gigabyte";
		op6.innerHTML= "Terabyte";

		//Setting Visibility
		document.querySelector('#op1').style.display = 'block';
		document.querySelector('#op2').style.display = 'block';
		document.querySelector('#op3').style.display = 'block';
		document.querySelector('#op4').style.display = 'block';
		document.querySelector('#op5').style.display = 'block';
		document.querySelector('#op6').style.display = 'block';

		opb1.innerHTML= "Bit";
		opb2.innerHTML= "Byte";
		opb3.innerHTML= "Kilobyte";
		opb4.innerHTML= "Megabyte";
		opb5.innerHTML= "Gigabyte";
		opb6.innerHTML= "Terabyte";

		//Setting Visibility
		document.querySelector('#opb1').style.display = 'block';
		document.querySelector('#opb2').style.display = 'block';
		document.querySelector('#opb3').style.display = 'block';
		document.querySelector('#opb4').style.display = 'block';
		document.querySelector('#opb5').style.display = 'block';
		document.querySelector('#opb6').style.display = 'block';
	}
	if(option.value=="Length"){
		op1.innerHTML= "Millimeter";
		op2.innerHTML= "Centimeter";
		op3.innerHTML= "Meter";
		op4.innerHTML= "Kilometer";
		op5.innerHTML= "Inch";
		op6.innerHTML= "Foot";

		//Setting Visibility
		document.querySelector('#op1').style.display = 'block';
		document.querySelector('#op2').style.display = 'block';
		document.querySelector('#op3').style.display = 'block';
		document.querySelector('#op4').style.display = 'block';
		document.querySelector('#op5').style.display = 'block';
		document.querySelector('#op6').style.display = 'block';

		opb1.innerHTML= "Millimeter";
		opb2.innerHTML= "Centimeter";
		opb3.innerHTML= "Meter";
		opb4.innerHTML= "Kilometer";
		opb5.innerHTML= "Inch";
		opb6.innerHTML= "Foot";

		//Setting Visibility
		document.querySelector('#opb1').style.display = 'block';
		document.querySelector('#opb2').style.display = 'block';
		document.querySelector('#opb3').style.display = 'block';
		document.querySelector('#opb4').style.display = 'block';
		document.querySelector('#opb5').style.display = 'block';
		document.querySelector('#opb6').style.display = 'block';
	}
	if(option.value=="Temperature"){
		op1.innerHTML= "Celcius";
		op2.innerHTML= "Fahrenheit";
		op3.innerHTML= "Kelvin";

		//Setting Visibility
		document.querySelector('#op1').style.display = 'block';
		document.querySelector('#op2').style.display = 'block';
		document.querySelector('#op3').style.display = 'block';

		document.querySelector('#op4').style.display = 'none';
		document.querySelector('#op5').style.display = 'none';
		document.querySelector('#op6').style.display = 'none';

		opb1.innerHTML= "Celcius";
		opb2.innerHTML= "Fahrenheit";
		opb3.innerHTML= "Kelvin";

		//Setting Visibility
		document.querySelector('#opb1').style.display = 'block';
		document.querySelector('#opb2').style.display = 'block';
		document.querySelector('#opb3').style.display = 'block';

		document.querySelector('#opb4').style.display = 'none';
		document.querySelector('#opb5').style.display = 'none';
		document.querySelector('#opb6').style.display = 'none';
	}
	if(option.value=="Force"){
		op1.innerHTML= "Newton";
		op2.innerHTML= "Kilonewton";
		op3.innerHTML= "Dyne";

		//Setting Visibility
		document.querySelector('#op1').style.display = 'block';
		document.querySelector('#op2').style.display = 'block';
		document.querySelector('#op3').style.display = 'block';

		document.querySelector('#op4').style.display = 'none';
		document.querySelector('#op5').style.display = 'none';
		document.querySelector('#op6').style.display = 'none';

		opb1.innerHTML= "Newton";
		opb2.innerHTML= "Kilonewton";
		opb3.innerHTML= "Dyne";

		//Setting Visibility
		document.querySelector('#opb1').style.display = 'block';
		document.querySelector('#opb2').style.display = 'block';
		document.querySelector('#opb3').style.display = 'block';

		document.querySelector('#opb4').style.display = 'none';
		document.querySelector('#opb5').style.display = 'none';
		document.querySelector('#opb6').style.display = 'none';
	}
	if(option.value=="Frequency"){
		op1.innerHTML= "Hertz";
		op2.innerHTML= "Kilohertz";
		op3.innerHTML= "Megahertz";
		op4.innerHTML= "Gigahertz";

		//Setting Visibility
		document.querySelector('#op1').style.display = 'block';
		document.querySelector('#op2').style.display = 'block';
		document.querySelector('#op3').style.display = 'block';
		document.querySelector('#op4').style.display = 'block';

		document.querySelector('#op5').style.display = 'none';
		document.querySelector('#op6').style.display = 'none';

		opb1.innerHTML= "Hertz";
		opb2.innerHTML= "Kilohertz";
		opb3.innerHTML= "Megahertz";
		opb4.innerHTML= "Gigahertz";

		//Setting Visibility
		document.querySelector('#opb1').style.display = 'block';
		document.querySelector('#opb2').style.display = 'block';
		document.querySelector('#opb3').style.display = 'block';
		document.querySelector('#opb4').style.display = 'block';

		document.querySelector('#opb5').style.display = 'none';
		document.querySelector('#opb6').style.display = 'none';
	}
	if(option.value=="Mass"){
		op1.innerHTML= "Gram";
		op2.innerHTML= "Kilogram";
		op3.innerHTML= "Metric Ton";
		op4.innerHTML= "Metric Quintal";

		//Setting Visibility
		document.querySelector('#op1').style.display = 'block';
		document.querySelector('#op2').style.display = 'block';
		document.querySelector('#op3').style.display = 'block';
		document.querySelector('#op4').style.display = 'block';

		document.querySelector('#op5').style.display = 'none';
		document.querySelector('#op6').style.display = 'none';

		opb1.innerHTML= "Gram";
		opb2.innerHTML= "Kilogram";
		opb3.innerHTML= "Metric Ton";
		opb4.innerHTML= "Metric Quintal";

		//Setting Visibility
		document.querySelector('#opb1').style.display = 'block';
		document.querySelector('#opb2').style.display = 'block';
		document.querySelector('#opb3').style.display = 'block';
		document.querySelector('#opb4').style.display = 'block';

		document.querySelector('#opb5').style.display = 'none';
		document.querySelector('#opb6').style.display = 'none';
	}
	if(option.value=="Power"){
		op1.innerHTML= "Watt";
		op2.innerHTML= "Kilowatt";
		op3.innerHTML= "Megawatt";
		op4.innerHTML= "Horsepower";
		
		//Setting Visibility
		document.querySelector('#op1').style.display = 'block';
		document.querySelector('#op2').style.display = 'block';
		document.querySelector('#op3').style.display = 'block';
		document.querySelector('#op4').style.display = 'block';
		
		document.querySelector('#op5').style.display = 'none';
		document.querySelector('#op6').style.display = 'none';

		opb1.innerHTML= "Watt";
		opb2.innerHTML= "Kilowatt";
		opb3.innerHTML= "Megawatt";
		opb4.innerHTML= "Horsepower";
		
		//Setting Visibility
		document.querySelector('#opb1').style.display = 'block';
		document.querySelector('#opb2').style.display = 'block';
		document.querySelector('#opb3').style.display = 'block';
		document.querySelector('#opb4').style.display = 'block';
		
		document.querySelector('#opb5').style.display = 'none';
		document.querySelector('#opb6').style.display = 'none';
	}
	if(option.value=="Time"){
		op1.innerHTML= "Second";
		op2.innerHTML= "Minute";
		op3.innerHTML= "Hour";

		//Setting Visibility
		document.querySelector('#op1').style.display = 'block';
		document.querySelector('#op2').style.display = 'block';
		document.querySelector('#op3').style.display = 'block';

		document.querySelector('#op4').style.display = 'none';
		document.querySelector('#op5').style.display = 'none';
		document.querySelector('#op6').style.display = 'none';

		opb1.innerHTML= "Second";
		opb2.innerHTML= "Minute";
		opb3.innerHTML= "Hour";

		//Setting Visibility
		document.querySelector('#opb1').style.display = 'block';
		document.querySelector('#opb2').style.display = 'block';
		document.querySelector('#opb3').style.display = 'block';

		document.querySelector('#opb4').style.display = 'none';
		document.querySelector('#opb5').style.display = 'none';
		document.querySelector('#opb6').style.display = 'none';
	}
}
function myFunction() {
	if(temp.value=="Celcius"){
		document.getElementById("paragraph").innerHTML = "Value in Fahrenheit= "+((input.value*1.8)+32).toFixed(2)+" And Kelvin= "+(parseFloat(input.value)+273.15).toFixed(2);
	}
	else if(temp.value=="Fahrenheit"){
		document.getElementById("paragraph").innerHTML = "Value in Celcius= "+((input.value-32)/1.8).toFixed(2)+" And Kelvin= "+(((input.value-32)/1.8)+273.15).toFixed(2);
	}
	else{
		document.getElementById("paragraph").innerHTML = "Value in Celcius= "+(parseFloat(input.value)-273.15).toFixed(2)+" And Fahrenheit= "+(((parseFloat(input.value)-273.15)*1.8)+32).toFixed(2);
	}
}

function calculateVal(){
	if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text==document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text){
		if(input.value!=""){
			document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+input.value;
		}
		else{
			document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": 0";
		}
	}
	if(option.value=="Angle"){
		//Converting Degree
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Degree"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Radian"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/57.29578).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Minutes"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*60).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Seconds"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*3600).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Revolution"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/360).toFixed(4);
			}
		}

		//Converting Radian
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Radian"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Degree"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*57.29578).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Minutes"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*60*57.29578).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Seconds"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*3600*57.29578).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Revolution"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value*57.29578)/360).toFixed(4);
			}
		}

		//Converting Minutes
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Minutes"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Degree"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/60).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Radian"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/3438).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Seconds"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*60).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Revolution"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/21600).toFixed(4);
			}
		}

		//Converting Seconds
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Seconds"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Degree"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/3600).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Radian"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/206300).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Minutes"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/60).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Revolution"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1296000).toFixed(4);
			}
		}

		//Converting Revolution
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Revolution"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Degree"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*360).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Radian"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*6.283).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Minutes"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*21600).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Seconds"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1296000).toFixed(4);
			}
		}
	}


	if(option.value=="Data"){
		//Converting Bit
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Bit"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Byte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/8).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilobyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/8000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Megabyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/8000000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Gigabyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(8.0000E+9)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Terabyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(8.0000E+12)).toFixed(4);
			}
		}

		//Converting Byte
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Byte"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Bit"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*8).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilobyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Megabyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Gigabyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(1.0000E+9)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Terabyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(1.0000E+12)).toFixed(4);
			}
		}

		//Converting Kilobyte
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Kilobyte"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Bit"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*8000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Byte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Megabyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Gigabyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(1000000)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Terabyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(1.0000E+9)).toFixed(4);
			}
		}

		//Converting Megabyte
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Megabyte"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Bit"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*8000000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Byte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilobyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Gigabyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(1000)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Terabyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(1000000)).toFixed(4);
			}
		}

		//Converting Gigabyte
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Gigabyte"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Bit"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(8.0000E+9)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Byte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(1.0000E+9)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilobyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Megabyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(1000)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Terabyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(1000)).toFixed(4);
			}
		}

		//Converting Terabyte
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Terabyte"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Bit"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(8.0000E+12)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Byte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(1.0000E+12)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilobyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(1.0000E+9)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Megabyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(1000000)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Gigabyte"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(1000)).toFixed(4);
			}
		}
	}

	if(option.value=="Mass"){
		//Converting Gram
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Gram"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilogram"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Metric Ton"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Metric Quintal"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/100000).toFixed(4);
			}
		}

		//Converting Kilogram
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Kilogram"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Gram"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Metric Ton"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Metric Quintal"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/100).toFixed(4);
			}
		}

		//Converting Metric Ton
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Metric Ton"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Gram"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilogram"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Metric Quintal"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*10).toFixed(4);
			}
		}

		//Converting Metric Quintal
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Metric Quintal"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Gram"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*100000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilogram"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*100).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Metric Ton"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/10).toFixed(4);
			}
		}
	}

	if(option.value=="Temperature"){
		//Converting Celcius
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Celcius"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Fahrenheit"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(1.8)+32).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kelvin"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(1)+273.15).toFixed(4);
			}
		}

		//Converting Fahrenheit
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Fahrenheit"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Celcius"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value*(1)-32)/(1.8)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kelvin"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+(((input.value)*(1)+459.67)/1.8).toFixed(4);
			}
		}

		//Converting Kelvin
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Kelvin"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Celcius"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value*(1))-273.15).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Fahrenheit"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+(((input.value)*(1)-273.15)*(1.8)+32).toFixed(4);
			}
		}

	}

	if(option.value=="Time"){
		//Converting Second
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Second"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Minute"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/60).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Hour"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/3600).toFixed(4);
			}
		}

		//Converting Minute
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Minute"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Second"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*60).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Hour"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/60).toFixed(4);
			}
		}

		//Converting Hour
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Hour"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Second"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*3600).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Minute"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*60).toFixed(4);
			}
		}

	}

	if(option.value=="Length"){
		//Converting Millimeter
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Millimeter"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Centimeter"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/10).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Meter"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilometer"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Inch"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(25.4)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Foot"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(304.8)).toFixed(4);
			}
		}

		//Converting Centimeter
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Centimeter"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Millimeter"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*10).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Meter"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/100).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilometer"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/100000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Inch"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(2.54)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Foot"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(30.48)).toFixed(4);
			}
		}

		//Converting Meter
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Meter"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Millimeter"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Centimeter"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*100).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilometer"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Inch"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(39.3700787)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Foot"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(3.2808399)).toFixed(4);
			}
		}

		//Converting Kilometer
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Kilometer"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Millimeter"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Centimeter"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*100000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Meter"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Inch"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(39370.0787)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Foot"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(3280.8399)).toFixed(4);
			}
		}

		//Converting Inch
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Inch"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Millimeter"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(25.4)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Centimeter"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(2.54)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Meter"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(39.3700787)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilometer"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(39370.0787)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Foot"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(12)).toFixed(4);
			}
		}

		//Converting Foot
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Foot"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Millimeter"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(304.8)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Centimeter"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(30.48)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Meter"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(3.2808399)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilometer"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(3280.8399)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Inch"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(12)).toFixed(4);
			}
		}
	}


	if(option.value=="Frequency"){
		//Converting Hertz
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Hertz"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilohertz"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Megahertz"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Gigahertz"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(1.0000E+9)).toFixed(4);
			}
		}

		//Converting Kilohertz
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Kilohertz"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Hertz"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Megahertz"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Gigahertz"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000000).toFixed(4);
			}
		}

		//Converting Megahertz
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Megahertz"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Hertz"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilohertz"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Gigahertz"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000).toFixed(4);
			}
		}

		//Converting Gigahertz
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Gigahertz"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Hertz"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(1.0000E+9)).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilohertz"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Megahertz"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000).toFixed(4);
			}
		}
	}

	if(option.value=="Force"){
		//Converting Newton
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Newton"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilonewton"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Dyne"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*100000).toFixed(4);
			}
		}

		//Converting Kilonewton
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Kilonewton"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Newton"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Dyne"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(1.0000E+8)).toFixed(4);
			}
		}

		//Converting Dyne
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Dyne"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Newton"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/100000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilonewton"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/100000000).toFixed(4);
			}
		}

	}

	if(option.value=="Power"){
		//Converting Watt
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Watt"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilowatt"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Megawatt"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Horsepower"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(745.699872)).toFixed(4);
			}
		}

		//Converting Kilowatt
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Kilowatt"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Watt"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Megawatt"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Horsepower"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(1.34102209)).toFixed(4);
			}
		}

		//Converting Megawatt
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Megawatt"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Watt"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilowatt"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*1000).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Horsepower"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*(1341.02209)).toFixed(4);
			}
		}

		//Converting Horsepower
		if(document.getElementById("value").options[document.getElementById("value").selectedIndex].text=="Horsepower"){
			if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Watt"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)*745.699872).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Kilowatt"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/1.34102209).toFixed(4);
			}
			else if(document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text=="Megawatt"){
				document.getElementById("paragraph").innerHTML = "Value in "+document.getElementById("value2").options[document.getElementById("value2").selectedIndex].text+": "+((input.value)/(1341.02209)).toFixed(4);
			}
		}
	}
}