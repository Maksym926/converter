



document.addEventListener('DOMContentLoaded', () => { // when the content of the page loads the event runs
    const tabs = document.querySelectorAll('.tab'); // get all tab elements
    const contents = document.querySelectorAll('.tab-content'); // get all tabs with content 
    
    tabs.forEach((tab, index) => { //go thought all tabs 
        tab.addEventListener("click", function(){ 
            contents.forEach(tab => tab.classList.remove("active")) // remove class active from all tabs
            contents[index].classList.add("active"); // assign class active to the clicked tab

        });
    })
    
    
});


// Select necessary elements from the document
const temperatureSelectField1 = document.querySelector(".temperatureSelectField1"); 
const temperatureSelectField2 = document.querySelector(".temperatureSelectField2"); 
const inputField = document.querySelector(".inputField_temperature");
const outputField_temperature = document.querySelector(".outputField_temperature")



inputField.addEventListener("input", () => { // the event runs when user entered data to the text field
    runTemperatureConverter(); // call the method runTemperatureConverter
})
// initialize Celsius, Fahrenheit, Kelvin, Rankine classes 
class Celsius{ 
    //define properties, which take celsius as an argument and convert it to the fahrenheit, kelvin or rankine
    static fahrenheit = (celsius) => {return Number(celsius) * 9/5 + 32;} 
    static kelvin = (celsius) => {return Number(celsius) + 273.15;}
    static rankine = (celsius) => { return (Number(celsius) + 273.15) * 9/5;}
}
class Fahrenheit{
    //define properties, which take fahrenheit as an argument and convert it to the celsius, kelvin or rankine
    static celsius = (fahrenheit) => {return (Number(fahrenheit) - 32) * 5/9;}
    static kelvin = (fahrenheit) => {return (Number(fahrenheit) + 459.67) * 5/9;}
    static rankine = (fahrenheit) => { return  Number(fahrenheit) + 459.67;}
}
class Kelvin{
    //define properties, which take kelvin as an argument and convert it to the celsius, fahrenheit or rankine
    static celsius = (kelvin) => {return Number(kelvin) - 273.15;}
    static fahrenheit = (kelvin) => {return Number(kelvin) * 9/5 - 459.67;}
    static rankine = (kelvin) => { return  Number(kelvin) * 9/5;}
}
class Rankine{
    //define properties, which take rankine as an argument and convert it to the celsius, kelvin or fahrenheit
    static celsius = (rankine) => {return Number(rankine) * 5/9 - 273.15;}
    static fahrenheit = (rankine) => {return Number(rankine) - 459.67;}
    static kelvin = (rankine) => { return  Number(rankine) * 5/9;}
}

function runTemperatureConverter(){
    let output = ""; // Initialize an empty variable to store the conversion result
    // Check if the user is converting from Celsius to Fahrenheit
    if(temperatureSelectField1.value === "celsius" && temperatureSelectField2.value === "fahrenheit"){
        let fahrenheit = Celsius.fahrenheit(inputField.value); // Convert Celsius to Fahrenheit
        
        output= fahrenheit;
        setIndicatorColor(inputField.value); // call the setIndicatorColor method
        // Check if the user is converting from Celsius to Kelvin
    } else if (temperatureSelectField1.value === "celsius" && temperatureSelectField2.value === "kelvin") {
        let kelvin = Celsius.kelvin(inputField.value); // Convert Celsius to Kelvin
        output = kelvin;
        setIndicatorColor(inputField.value);

    // Check if the user is converting from Celsius to Rankine
    } else if (temperatureSelectField1.value === "celsius" && temperatureSelectField2.value === "rankine") {
        let rankine = Celsius.rankine(inputField.value); // Convert Celsius to Rankine
        output = rankine;
        setIndicatorColor(inputField.value);

    // Check if the user is converting from Fahrenheit to Celsius
    } else if (temperatureSelectField1.value === "fahrenheit" && temperatureSelectField2.value === "celsius") {
        let celsius = Fahrenheit.celsius(inputField.value); // Convert Fahrenheit to Celsius
        output = celsius;
        setIndicatorColor(celsius);

    // Check if the user is converting from Fahrenheit to Kelvin
    } else if (temperatureSelectField1.value === "fahrenheit" && temperatureSelectField2.value === "kelvin") {
        let kelvin = Fahrenheit.kelvin(inputField.value); // Convert Fahrenheit to Kelvin
        output = kelvin;
        setIndicatorColor(Fahrenheit.celsius(inputField.value));

    // Check if the user is converting from Fahrenheit to Rankine
    } else if (temperatureSelectField1.value === "fahrenheit" && temperatureSelectField2.value === "rankine") {
        let rankine = Fahrenheit.rankine(inputField.value); // Convert Fahrenheit to Rankine
        output = rankine;
        setIndicatorColor(Fahrenheit.celsius(inputField.value));

    // Check if the user is converting from Kelvin to Celsius
    } else if (temperatureSelectField1.value === "kelvin" && temperatureSelectField2.value === "celsius") {
        let celsius = Kelvin.celsius(inputField.value); // Convert Kelvin to Celsius
        output = celsius;
        setIndicatorColor(celsius);

    // Check if the user is converting from Kelvin to Fahrenheit
    } else if (temperatureSelectField1.value === "kelvin" && temperatureSelectField2.value === "fahrenheit") {
        let fahrenheit = Kelvin.fahrenheit(inputField.value); // Convert Kelvin to Fahrenheit
        setIndicatorColor(Kelvin.celsius(inputField.value));

    // Check if the user is converting from Kelvin to Rankine
    } else if (temperatureSelectField1.value === "kelvin" && temperatureSelectField2.value === "rankine") {
        let rankine = Kelvin.rankine(inputField.value); // Convert Kelvin to Rankine
        output = rankine;
        setIndicatorColor(Kelvin.celsius(inputField.value));

    // Check if the user is converting from Rankine to Celsius
    } else if (temperatureSelectField1.value === "rankine" && temperatureSelectField2.value === "celsius") {
        let celsius = Rankine.celsius(inputField.value); // Convert Rankine to Celsius
        output = celsius;
        setIndicatorColor(celsius);

    // Check if the user is converting from Rankine to Fahrenheit
    } else if (temperatureSelectField1.value === "rankine" && temperatureSelectField2.value === "fahrenheit") {
        let fahrenheit = Rankine.fahrenheit(inputField.value); // Convert Rankine to Fahrenheit
        output = fahrenheit;
        setIndicatorColor(Rankine.celsius(inputField.value));

    // Check if the user is converting from Rankine to Kelvin
    } else if (temperatureSelectField1.value === "rankine" && temperatureSelectField2.value === "kelvin") {
        let kelvin = Rankine.kelvin(inputField.value); // Convert Rankine to Kelvin
        output = kelvin;
        setIndicatorColor(Rankine.celsius(inputField.value));
    }
    outputField_temperature.innerHTML = output; // updates the output field with converted value
    
    

}

function setIndicatorColor(number){ // method takes celsius as an argument 
    const temperature_indicator = document.querySelector(".temperature_indicator"); // select temperature indicator from the document
    // Check if the number is 0 or below 
    if (number <= 0) {
        // Set the indicator background color to blue (#0000FF)
        temperature_indicator.style.backgroundColor = "#0000FF"  
    }
    // Check if the number is between 1 and 15 
    else if(number <= 15){
        // Set the indicator background color to cya
        temperature_indicator.style.backgroundColor = "#00FFFF"  
    }
    // Check if the number is between 16 and 25 (moderate temperature)
    else if(number <= 25){
        // Set the indicator background color to green
        temperature_indicator.style.backgroundColor = "#00FF00"  
    }
    // Check if the number is between 26 and 35
    else if(number <= 35){
        // Set the indicator background color to orange
        temperature_indicator.style.backgroundColor = "#FFA500";   
    }
    // If the number is greater than 35
    else{
        // Set the indicator background color to red
        temperature_indicator.style.backgroundColor = "#FF0000";
    }
        
    
    
}

const amount = document.querySelector(".inputField_amount");
amount.addEventListener("input", () => { // the event runs when user entered data to the text field
    
    convertCurrency(); // call convertCurrency function
    
})
async function convertCurrency(){ // async function always return promise, which represents the current state of the operation.
    
    const url = "https://v6.exchangerate-api.com/v6/e60fb30fbd57f2a9e8dde1f1/latest/USD"; // API url 
    try{
        // await pauses execution until the API responds
        const response = await fetch(url); // The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response. 

        if(!response.ok){ // checks the server response
            throw new Error(`Response status: ${response.status}`);
        }
        // extract response in the JSON formate
        const data = await response.json(); // await pauses execution until JSON is parsed
        runCurrencyConverter(data); // run runCurrencyConverter 
       
    }catch(error){ // if error occurs output to the console
        console.error(error.message);
    }
    
}
// Function takes available conversion rates as an argument
function runCurrencyConverter(data){  

    // Selecting the currency input fields and output field
    const currencyField1 = document.querySelector(".currencyField1");
    const currencyField2 = document.querySelector(".currencyField2");
    const outputField_currency = document.querySelector(".outputField_currency");

    // Check if converting from USD to EUR
    if(currencyField1.value === "USD" && currencyField2.value === "EUR"){
        let usd = amount.value; 
        // Multiply the amount in USD by the conversion rate to get EUR
        outputField_currency.innerHTML = usd * data.conversion_rates.EUR;  

    // Check if converting from USD to JPY
    } else if(currencyField1.value === "USD" && currencyField2.value === "JPY"){
        let usd = amount.value;
        // Multiply the amount in USD by the conversion rate to get JPY
        outputField_currency.innerHTML = usd * data.conversion_rates.JPY; 

    // Check if converting from USD to UAH
    } else if(currencyField1.value === "USD" && currencyField2.value === "UAH"){
        let usd = amount.value;
        // Multiply the amount in USD by the conversion rate to get UAH
        outputField_currency.innerHTML = usd * data.conversion_rates.UAH; 

    // Check if converting from EUR to USD
    } else if(currencyField1.value === "EUR" && currencyField2.value === "USD"){
        let usd = amount.value / data.conversion_rates.EUR;
        // Convert EUR to USD by dividing the amount by the EUR conversion rate
        outputField_currency.innerHTML = usd; 

    // Check if converting from EUR to JPY
    } else if(currencyField1.value === "EUR" && currencyField2.value === "JPY"){
        let usd = amount.value / data.conversion_rates.EUR;
        // Convert EUR to USD first, then multiply by the JPY conversion rate to get JPY
        outputField_currency.innerHTML = usd * data.conversion_rates.JPY; 

    // Check if converting from EUR to UAH
    } else if(currencyField1.value === "EUR" && currencyField2.value === "UAH"){
        let usd = amount.value / data.conversion_rates.EUR;
        // Convert EUR to USD first, then multiply by the UAH conversion rate to get UAH
        outputField_currency.innerHTML = usd * data.conversion_rates.UAH; 

    // Check if converting from JPY to USD
    } else if(currencyField1.value === "JPY" && currencyField2.value === "USD"){
        let usd = amount.value / data.conversion_rates.JPY;
        // Convert JPY to USD by dividing the amount by the JPY conversion rate
        outputField_currency.innerHTML = usd; 

    // Check if converting from JPY to EUR
    } else if(currencyField1.value === "JPY" && currencyField2.value === "EUR"){
        let usd = amount.value / data.conversion_rates.JPY;
        // Convert JPY to USD first, then multiply by the EUR conversion rate to get EUR
        outputField_currency.innerHTML = usd * data.conversion_rates.EUR; 

    // Check if converting from JPY to UAH
    } else if(currencyField1.value === "JPY" && currencyField2.value === "UAH"){
        let usd = amount.value / data.conversion_rates.JPY;
        // Convert JPY to USD first, then multiply by the UAH conversion rate to get UAH
        outputField_currency.innerHTML = usd * data.conversion_rates.UAH; 

    // Check if converting from UAH to USD
    } else if(currencyField1.value === "UAH" && currencyField2.value === "USD"){
        let usd = amount.value / data.conversion_rates.UAH;
        // Convert UAH to USD by dividing the amount by the UAH conversion rate
        outputField_currency.innerHTML = usd; 

    // Check if converting from UAH to EUR
    } else if(currencyField1.value === "UAH" && currencyField2.value === "EUR"){
        let usd = amount.value / data.conversion_rates.UAH;
        // Convert UAH to USD first, then multiply by the EUR conversion rate to get EUR
        outputField_currency.innerHTML = usd * data.conversion_rates.EUR; 

    // Check if converting from UAH to JPY
    } else if(currencyField1.value === "UAH" && currencyField2.value === "JPY"){
        let usd = amount.value / data.conversion_rates.UAH;
        // Convert UAH to USD first, then multiply by the JPY conversion rate to get JPY
        outputField_currency.innerHTML = usd * data.conversion_rates.JPY; 
    }
}
const inputField_speed =  document.querySelector(".inputField_speed"); // select input field from the document
inputField_speed.addEventListener("input", ()=> { // the event runs when user entered data to the text field
  runSpeedConverter();  
})
// Function to convert speed between different units
function runSpeedConverter(){
    
    // Selecting the input fields for speed units and output field
    const speedField1 = document.querySelector(".speedField1");
    const speedField2 = document.querySelector(".speedField2");
    const outputField1_speed = document.querySelector(".outputField1_speed");

    // Check if converting from kilometers per hour (kmph) to meters per second (mps)
    if(speedField1.value == "kmph" && speedField2.value == "mps"){
        // Convert kmph to mps by dividing by 1.609344
        outputField1_speed.innerHTML = inputField_speed.value / 1.609344;

    // Check if converting from kilometers per hour (kmph) to feet per second (fps)
    } else if(speedField1.value == "kmph" && speedField2.value == "fps"){
        // Convert kmph to fps by dividing by 1.09728
        outputField1_speed.innerHTML = inputField_speed.value / 1.09728;

    // Check if converting from kilometers per hour (kmph) to yards per second (yps)
    } else if(speedField1.value == "kmph" && speedField2.value == "yps"){
        // Convert kmph to yps by dividing by 0.911344
        outputField1_speed.innerHTML = inputField_speed.value / 0.911344;

    // Check if converting from meters per second (mps) to kilometers per hour (kmph)
    } else if(speedField1.value == "mps" && speedField2.value == "kmph"){
        // Convert mps to kmph by multiplying by 3.6
        outputField1_speed.innerHTML = inputField_speed.value * 3.6;

    // Check if converting from meters per second (mps) to feet per second (fps)
    } else if(speedField1.value == "mps" && speedField2.value == "fps"){
        // Convert mps to fps by multiplying by 3.28084
        outputField1_speed.innerHTML = inputField_speed.value * 3.28084;

    // Check if converting from meters per second (mps) to yards per second (yps)
    } else if(speedField1.value == "mps" && speedField2.value == "yps"){
        // Convert mps to yps by multiplying by 1.09361
        outputField1_speed.innerHTML = inputField_speed.value * 1.09361;

    // Check if converting from feet per second (fps) to kilometers per hour (kmph)
    } else if(speedField1.value == "fps" && speedField2.value == "kmph"){
        // Convert fps to kmph by multiplying by 1.09728
        outputField1_speed.innerHTML = inputField_speed.value * 1.09728;

    // Check if converting from feet per second (fps) to meters per second (mps)
    } else if(speedField1.value == "fps" && speedField2.value == "mps"){
        // Convert fps to mps by multiplying by 0.3048
        outputField1_speed.innerHTML = inputField_speed.value * 0.3048;

    // Check if converting from feet per second (fps) to yards per second (yps)
    } else if(speedField1.value == "fps" && speedField2.value == "yps"){
        // Convert fps to yps by dividing by 3
        outputField1_speed.innerHTML = inputField_speed.value / 3;

    // Check if converting from yards per second (yps) to kilometers per hour (kmph)
    } else if(speedField1.value == "yps" && speedField2.value == "kmph"){
        // Convert yps to kmph by multiplying by 3.29184
        outputField1_speed.innerHTML = inputField_speed.value * 3.29184;

    // Check if converting from yards per second (yps) to meters per second (mps)
    } else if(speedField1.value == "yps" && speedField2.value == "mps"){
        // Convert yps to mps by multiplying by 0.9144
        outputField1_speed.innerHTML = inputField_speed.value * 0.9144;

    // Check if converting from yards per second (yps) to feet per second (fps)
    } else if(speedField1.value == "yps" && speedField2.value == "fps"){
        // Convert yps to fps by multiplying by 3
        outputField1_speed.innerHTML = inputField_speed.value * 3;
    }
}

