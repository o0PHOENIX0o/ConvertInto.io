function load(){
	createOptions(angleUnits, "value");
	createOptions(angleUnits, "value2");
	setTimeout(removeLoader, 500);
}
function removeLoader() {
    document.querySelector('#loader').style.display = 'none';
}


function createOptions(unit, id){
	let idValue = "op";
	
	$(`#${id}`).empty();

	if(id == "value2"){
		idValue = "opb";
	}

	unit.forEach((option, index) => {
		const newOption = document.createElement("option");
		newOption.value = option;
		newOption.textContent = option;
		newOption.id = `${idValue}${index+1}`;
		$(`#${id}`).append(newOption);
	});
}

const angleUnits = ["Degree", "Radian", "Minutes","Seconds","Revolution"];
const dataUnits = ["Bit", "Byte", "Kilobyte", "Megabyte", "Gigabyte", "Terabyte"];
const lengthUnits = ["Millimeter", "Centimeter", "Meter", "Kilometer", "Inch", "Foot"];
const temperatureUnits = ["Celsius", "Fahrenheit", "Kelvin"];
const forceUnits = ["Newton", "Kilonewton", "Dyne"];
const frequencyUnits = ["Hertz", "Kilohertz", "Megahertz", "Gigahertz"];
const massUnits = ["Gram", "Kilogram", "Metric Ton", "Metric Quintal"];
const powerUnits = ["Watt", "Kilowatt", "Megawatt", "Horsepower"];
const timeUnits = ["Second", "Minute", "Hour"];



function changeVal(){

	document.querySelector('#value').value=op1.value;
	document.querySelector('#value2').value=opb1.value;

	switch (option.value) {
		case "Angle":
			createOptions(angleUnits, "value");
			createOptions(angleUnits, "value2");
			break;
		case "Data":
			createOptions(dataUnits, "value");
			createOptions(dataUnits, "value2");
			break;
		case "Length":
			createOptions(lengthUnits, "value");
			createOptions(lengthUnits, "value2");
			break;
		case "Temperature":
			createOptions(temperatureUnits, "value");
			createOptions(temperatureUnits, "value2");
			break;
		case "Force":
			createOptions(forceUnits, "value");
			createOptions(forceUnits, "value2");
			break;
		case "Frequency":
			createOptions(frequencyUnits, "value");
			createOptions(frequencyUnits, "value2");
			break;
		case "Mass":
			createOptions(massUnits, "value");
			createOptions(massUnits, "value2");
			break;
		case "Power":
			createOptions(powerUnits, "value");
			createOptions(powerUnits, "value2");
			break;
		case "Time":
			createOptions(timeUnits, "value");
			createOptions(timeUnits, "value2");
			break;
		
	}

}

function calculateVal() {
    const $value = $("#value");
    const $value2 = $("#value2");
    const $input = $("#input");
    const $paragraph = $("#paragraph");

    const selectedValue = $value.find("option:selected").text();
    const selectedValue2 = $value2.find("option:selected").text();
    const inputValue = $input.val() || "0";

    if (selectedValue === selectedValue2) {
        $paragraph.html(`Value in ${selectedValue2}: ${inputValue}`);
        return;
    }

    if (selectedValue === "Degree") {
        let conversionFactor;
        
        switch (selectedValue2) {
            case "Radian":
                conversionFactor = 57.29578;
                break;
            case "Minutes":
                conversionFactor = 60;
                break;
            case "Seconds":
                conversionFactor = 3600;
                break;
            case "Revolution":
                conversionFactor = 360;
                break;
            default:
                conversionFactor = 1; 
        }

		const result = (inputValue / conversionFactor).toFixed(4);
        $paragraph.html(`Value in ${selectedValue2}: ${result}`);


		// Converting Radian
		if (selectedValue === "Radian") {
			let conversionFactor;

			switch (selectedValue2) {
				case "Degree":
					conversionFactor = 57.29578;
					break;
				case "Minutes":
					conversionFactor = 60 * 57.29578;
					break;
				case "Seconds":
					conversionFactor = 3600 * 57.29578;
					break;
				case "Revolution":
					conversionFactor = 7.29578 / 360;
					break;
				default:
					conversionFactor = 1;
			}
			const result = (inputValue * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}


		// Converting Minutes
		if (selectedValue === "Minutes") {
			let conversionFactor;

			switch (selectedValue2) {
				case "Degree":
					conversionFactor = 60;
					break;
				case "Radian":
					conversionFactor = 3438;
					break;
				case "Seconds":
					conversionFactor = 60;
					break;
				case "Revolution":
					conversionFactor = 21600;
					break;
				default:
					conversionFactor = 1;
			}
			const result = (inputValue / conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}

		// Converting Seconds
		if (selectedValue === "Seconds") {
			let conversionFactor;

			switch (selectedValue2) {
				case "Degree":
					result = 3600;
					break;
				case "Radian":
					result = 206300;
					break;
				case "Minutes":
					result = 60;
					break;
				case "Revolution":
					result = 1296000;
					break;
				default:
					result = 1;
			}
			const result = (inputValue / conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}


		// Converting Revolution
		if (selectedValue === "Revolution") {
			let conversionFactor;

			switch (selectedValue2) {
				case "Degree":
					conversionFactor = 360;
					break;
				case "Radian":
					conversionFactor = 6.283;
					break;
				case "Minutes":
					conversionFactor = 21600;
					break;
				case "Seconds":
					conversionFactor = 1296000;
					break;
				default:
					conversionFactor = 1;
			}

			const result = (inputValue * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}

	}


	if(option.value=="Data"){
		//Converting Bit
		if (selectedValue === "Bit") {
			switch (selectedValue2) {
				case "Byte":
					conversionFactor = 8;
					break;
				case "Kilobyte":
					conversionFactor = 8000;
					break;
				case "Megabyte":
					conversionFactor = 8000000;
					break;
				case "Gigabyte":
					conversionFactor = 8e9;
					break;
				case "Terabyte":
					conversionFactor = 8e12;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (inputValue / conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}

		//Converting Byte
		if (selectedValue === "Byte") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Bit":
					conversionFactor = 8;
					break;
				case "Kilobyte":
					conversionFactor = 0.001; // 1 Byte = 0.001 Kilobyte
					break;
				case "Megabyte":
					conversionFactor = 1e-6; // 1 Byte = 1e-6 Megabyte
					break;
				case "Gigabyte":
					conversionFactor = 1e-9; // 1 Byte = 1e-9 Gigabyte
					break;
				case "Terabyte":
					conversionFactor = 1e-12; // 1 Byte = 1e-12 Terabyte
					break;
				default:
					conversionFactor = 1; // default case (shouldn't happen)
					break;
			}
		
			const result = (inputValue * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}

		//Converting Kilobyte
		if (selectedValue === "Kilobyte") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Bit":
					conversionFactor = 8000;
					break;
				case "Byte":
					conversionFactor = 1000;
					break;
				case "Megabyte":
					conversionFactor = 0.001;
					break;
				case "Gigabyte":
					conversionFactor = 1e-6;
					break;
				case "Terabyte":
					conversionFactor = 1e-9;
					break;
				default:
					conversionFactor = 1; // default case
					break;
			}
		
			const result = (inputValue * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

		//Converting Megabyte
		if (selectedValue === "Megabyte") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Bit":
					conversionFactor = 8000000;
					break;
				case "Byte":
					conversionFactor = 1000000;
					break;
				case "Kilobyte":
					conversionFactor = 1000;
					break;
				case "Gigabyte":
					conversionFactor = 0.001;
					break;
				case "Terabyte":
					conversionFactor = 1e-6;
					break;
				default:
					conversionFactor = 1; // default case
					break;
			}
		
			const result = (inputValue * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}

		//Converting Gigabyte
		
		if (selectedValue === "Gigabyte") {
			let conversionFactor;

			switch (selectedValue2) {
				case "Bit":
					conversionFactor = 8e9;
					break;
				case "Byte":
					conversionFactor = 1e9;
					break;
				case "Kilobyte":
					conversionFactor = 1e6;
					break;
				case "Megabyte":
					conversionFactor = 1000;
					break;
				case "Terabyte":
					conversionFactor = 0.001;
					break;
				default:
					conversionFactor = 1; // Default case
					break;
			}

			const result = (inputValue * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}

		//Converting Terabyte
		if (selectedValue === "Terabyte") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Bit":
					conversionFactor = 8e12;
					break;
				case "Byte":
					conversionFactor = 1e12;
					break;
				case "Kilobyte":
					conversionFactor = 1e9;
					break;
				case "Megabyte":
					conversionFactor = 1e6;
					break;
				case "Gigabyte":
					conversionFactor = 1000;
					break;
				default:
					conversionFactor = 1; // Default case
					break;
			}
		
			const result = (inputValue * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
	}

	if(option.value=="Mass"){
		//Converting Gram
		if (selectedValue === "Gram") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Kilogram":
					conversionFactor = 0.001; // 1 Gram = 0.001 Kilogram
					break;
				case "Metric Ton":
					conversionFactor = 1e-6; // 1 Gram = 0.000001 Metric Ton
					break;
				case "Metric Quintal":
					conversionFactor = 0.00001; // 1 Gram = 0.00001 Metric Quintal
					break;
				default:
					conversionFactor = 1; // Default case
					break;
			}
		
			const result = (inputValue * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}

		//Converting Kilogram
		if (selectedValue === "Kilogram") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Gram":
					conversionFactor = 1000; // 1 Kilogram = 1000 Grams
					break;
				case "Metric Ton":
					conversionFactor = 0.001; // 1 Kilogram = 0.001 Metric Tons
					break;
				case "Metric Quintal":
					conversionFactor = 10; // 1 Kilogram = 10 Metric Quintals
					break;
				default:
					conversionFactor = 1; // Default case
					break;
			}
		
			const result = (inputValue * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}

		//Converting Metric Ton
		if (selectedValue === "Metric Ton") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Gram":
					conversionFactor = 1e6; // 1 Metric Ton = 1,000,000 Grams
					break;
				case "Kilogram":
					conversionFactor = 1000; // 1 Metric Ton = 1,000 Kilograms
					break;
				case "Metric Quintal":
					conversionFactor = 100; // 1 Metric Ton = 100 Metric Quintals
					break;
				default:
					conversionFactor = 1; // Default case
					break;
			}
		
			const result = (inputValue * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}

		//Converting Metric Quintal
		if (selectedValue === "Metric Quintal") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Gram":
					conversionFactor = 100000; // 1 Metric Quintal = 100,000 Grams
					break;
				case "Kilogram":
					conversionFactor = 100; // 1 Metric Quintal = 100 Kilograms
					break;
				case "Metric Ton":
					conversionFactor = 0.1; // 1 Metric Quintal = 0.1 Metric Tons
					break;
				default:
					conversionFactor = 1; // Default case
					break;
			}
		
			const result = (inputValue * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		
	}

	if(option.value=="Temperature"){
		//Converting Celcius
		if (selectedValue === "Celsius") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Fahrenheit":
					conversionFactor = (inputValue * 1.8) + 32; // Celsius to Fahrenheit
					break;
				case "Kelvin":
					conversionFactor = (inputValue + 273.15); // Celsius to Kelvin
					break;
				default:
					conversionFactor = inputValue; // Default case
					break;
			}
		
			const result = conversionFactor.toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

		//Converting Fahrenheit
		if (selectedValue === "Fahrenheit") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Celsius":
					conversionFactor = (inputValue - 32) / 1.8; // Fahrenheit to Celsius
					break;
				case "Kelvin":
					conversionFactor = ((inputValue + 459.67) / 1.8); // Fahrenheit to Kelvin
					break;
				default:
					conversionFactor = inputValue; // Default case
					break;
			}
		
			const result = conversionFactor.toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

		//Converting Kelvin
		if (selectedValue === "Kelvin") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Celsius":
					conversionFactor = inputValue - 273.15; // Kelvin to Celsius
					break;
				case "Fahrenheit":
					conversionFactor = (inputValue - 273.15) * 1.8 + 32; // Kelvin to Fahrenheit
					break;
				default:
					conversionFactor = inputValue; // Default case
					break;
			}
		
			const result = conversionFactor.toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

	}

	if(option.value=="Time"){
		//Converting Second
		if (selectedValue === "Second") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Minute":
					conversionFactor = inputValue / 60; // Seconds to Minutes
					break;
				case "Hour":
					conversionFactor = inputValue / 3600; // Seconds to Hours
					break;
				default:
					conversionFactor = inputValue; // Default case
					break;
			}
		
			const result = conversionFactor.toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

		//Converting Minute
		if (selectedValue === "Minute") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Second":
					conversionFactor = inputValue * 60; // Minutes to Seconds
					break;
				case "Hour":
					conversionFactor = inputValue / 60; // Minutes to Hours
					break;
				default:
					conversionFactor = inputValue; // Default case
					break;
			}
		
			const result = conversionFactor.toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

		//Converting Hour
		if (selectedValue === "Hour") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Second":
					conversionFactor = 3600; // Hours to Seconds
					break;
				case "Minute":
					conversionFactor = 60; // Hours to Minutes
					break;
				default:
					conversionFactor = 1; // Default case
					break;
			}
		
			const result = (inputValue * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

	}

	if(option.value=="Length"){
		//Converting Millimeter
		if (selectedValue === "Millimeter") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Centimeter":
					conversionFactor = 10; // Millimeters to Centimeters
					break;
				case "Meter":
					conversionFactor = 1000; // Millimeters to Meters
					break;
				case "Kilometer":
					conversionFactor = 1e6; // Millimeters to Kilometers
					break;
				case "Inch":
					conversionFactor = 25.4; // Millimeters to Inches
					break;
				case "Foot":
					conversionFactor = 304.8; // Millimeters to Feet
					break;
				default:
					conversionFactor = 1; // Default case
					break;
			}
		
			const result = (inputValue / conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
	
		}
		

		//Converting Centimeter
		if (selectedValue === "Centimeter") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Millimeter":
					conversionFactor = 10;
					break;
				case "Meter":
					conversionFactor = 100;
					break;
				case "Kilometer":
					conversionFactor = 100000;
					break;
				case "Inch":
					conversionFactor = 2.54;
					break;
				case "Foot":
					conversionFactor = 30.48;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (input.value / conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

		//Converting Meter
		if (selectedValue === "Meter") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Millimeter":
					conversionFactor = 1000;
					break;
				case "Centimeter":
					conversionFactor = 100;
					break;
				case "Kilometer":
					conversionFactor = 0.001;
					break;
				case "Inch":
					conversionFactor = 39.3700787;
					break;
				case "Foot":
					conversionFactor = 3.2808399;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (input.value * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

		//Converting Kilometer
		if (selectedValue === "Kilometer") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Millimeter":
					conversionFactor = 1e6;
					break;
				case "Centimeter":
					conversionFactor = 100000;
					break;
				case "Meter":
					conversionFactor = 1000;
					break;
				case "Inch":
					conversionFactor = 39370.0787;
					break;
				case "Foot":
					conversionFactor = 3280.8399;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (input.value * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

		//Converting Inch
		if (selectedValue === "Inch") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Millimeter":
					conversionFactor = 25.4;
					break;
				case "Centimeter":
					conversionFactor = 2.54;
					break;
				case "Meter":
					conversionFactor = 39.3700787;
					break;
				case "Kilometer":
					conversionFactor = 39370.0787;
					break;
				case "Foot":
					conversionFactor = 12;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (input.value * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

		//Converting Foot
		if (selectedValue === "Foot") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Millimeter":
					conversionFactor = 304.8;
					break;
				case "Centimeter":
					conversionFactor = 30.48;
					break;
				case "Meter":
					conversionFactor = 3.2808399;
					break;
				case "Kilometer":
					conversionFactor = 3280.8399;
					break;
				case "Inch":
					conversionFactor = 12;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (input.value * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		
	}


	if(option.value=="Frequency"){
		//Converting Hertz
		if (selectedValue === "Hertz") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Kilohertz":
					conversionFactor = 1000;
					break;
				case "Megahertz":
					conversionFactor = 1e6;
					break;
				case "Gigahertz":
					conversionFactor = 1e9;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (input.value / conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		
		//Converting Kilohertz
		if (selectedValue === "Kilohertz") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Hertz":
					conversionFactor = 1000;
					break;
				case "Megahertz":
					conversionFactor = 0.001;
					break;
				case "Gigahertz":
					conversionFactor = 1e-6;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (input.value * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

		//Converting Megahertz
		if (selectedValue === "Megahertz") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Hertz":
					conversionFactor = 1e6;
					break;
				case "Kilohertz":
					conversionFactor = 1000;
					break;
				case "Gigahertz":
					conversionFactor = 0.001;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (input.value * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

		//Converting Gigahertz
		if (selectedValue === "Gigahertz") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Hertz":
					conversionFactor = 1e9;
					break;
				case "Kilohertz":
					conversionFactor = 1e6;
					break;
				case "Megahertz":
					conversionFactor = 1000;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (input.value * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		
	}

	if(option.value=="Force"){
		//Converting Newton
		if (selectedValue === "Newton") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Kilonewton":
					conversionFactor = 1000;
					break;
				case "Dyne":
					conversionFactor = 100000;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (input.value / conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

		//Converting Kilonewton
		if (selectedValue === "Kilonewton") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Newton":
					conversionFactor = 1000;
					break;
				case "Dyne":
					conversionFactor = 1e8;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (input.value * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

		//Converting Dyne
		if (selectedValue === "Dyne") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Newton":
					conversionFactor = 1 / 100000;
					break;
				case "Kilonewton":
					conversionFactor = 1 / 100000000;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (input.value * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

	}

	if(option.value=="Power"){
		//Converting Watt
		if (selectedValue === "Watt") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Kilowatt":
					conversionFactor = 1000;
					break;
				case "Megawatt":
					conversionFactor = 1000000;
					break;
				case "Horsepower":
					conversionFactor = 745.699872;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (input.value / conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

		//Converting Kilowatt
		if (selectedValue === "Kilowatt") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Watt":
					conversionFactor = 1000;
					break;
				case "Megawatt":
					conversionFactor = 1000;
					break;
				case "Horsepower":
					conversionFactor = 1.34102209;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (input.value * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
		

		//Converting Megawatt
		if (selectedValue === "Megawatt") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Watt":
					conversionFactor = 1000000;
					break;
				case "Kilowatt":
					conversionFactor = 1000;
					break;
				case "Horsepower":
					conversionFactor = 1341.02209;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (inputValue * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}		

		//Converting Horsepower
		if (selectedValue === "Horsepower") {
			let conversionFactor;
		
			switch (selectedValue2) {
				case "Watt":
					conversionFactor = 745.699872;
					break;
				case "Kilowatt":
					conversionFactor = 1 / 1.34102209;
					break;
				case "Megawatt":
					conversionFactor = 1 / 1341.02209;
					break;
				default:
					conversionFactor = 1;
					break;
			}
		
			const result = (inputValue * conversionFactor).toFixed(4);
			$paragraph.html(`Value in ${selectedValue2}: ${result}`);
		}
	}
}