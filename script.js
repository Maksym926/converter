



document.addEventListener('DOMContentLoaded', () => { // when the content of the page loads the event runs
    const tabs = document.querySelectorAll('.tab'); // get tab element
    const contents = document.querySelectorAll('.tab-content'); // get tab content 
    
    tabs.forEach((tab, index) => { //go thought all tabs 
        tab.addEventListener("click", function(){ 
            contents.forEach(tab => tab.classList.remove("active")) // remove class active from all tabs
            contents[index].classList.add("active"); // assign class active to the clicked tab

        });
    })
    
    
});

const temperatureSelectField1 = document.querySelector(".temperatureSelectField1");
const temperatureSelectField2 = document.querySelector(".temperatureSelectField2"); 
const inputField = document.querySelector(".inputField_temperature");
const outputField_temperature = document.querySelector(".outputField_temperature")



inputField.addEventListener("input", () => {
    runTemperatureConverter();
})

class Celsius{ 
    static fahrenheit = (celsius) => {return Number(celsius) * 9/5 + 32;}
    static kelvin = (celsius) => {return Number(celsius) + 273.15;}
    static rankine = (celsius) => { return (Number(celsius) + 273.15) * 9/5;}
}
class Fahrenheit{
    static celsius = (fahrenheit) => {return (Number(fahrenheit) - 32) * 5/9;}
    static kelvin = (fahrenheit) => {return (Number(fahrenheit) + 459.67) * 5/9;}
    static rankine = (fahrenheit) => { return  Number(fahrenheit) + 459.67;}
}
class Kelvin{
    static celsius = (kelvin) => {return Number(kelvin) - 273.15;}
    static fahrenheit = (kelvin) => {return Number(kelvin) * 9/5 - 459.67;}
    static rankine = (kelvin) => { return  Number(kelvin) * 9/5;}
}
class Rankine{
    static celsius = (rankine) => {return Number(rankine) * 5/9 - 273.15;}
    static fahrenheit = (rankine) => {return Number(rankine) - 459.67;}
    static kelvin = (rankine) => { return  Number(rankine) * 5/9;}
}

function runTemperatureConverter(){
    let output = "";
    if(temperatureSelectField1.value === "celsius" && temperatureSelectField2.value === "fahrenheit"){
        let fahrenheit = Celsius.fahrenheit(inputField.value); // call method convertCelsiusToFahrenheit
        
        output= fahrenheit;
        setIndicatorColor(inputField.value);
    }else if(temperatureSelectField1.value  === "celsius" && temperatureSelectField2.value === "kelvin"){
        let kelvin = Celsius.kelvin(inputField.value); // call method convertCelsiusToFahrenheit
        output = kelvin;
        setIndicatorColor(inputField.value);
    }else if(temperatureSelectField1.value  === "celsius" && temperatureSelectField2.value === "rankine"){
        let rankine = Celsius.rankine(inputField.value); // call method 
        output = rankine;
        setIndicatorColor(inputField.value);
    }else if(temperatureSelectField1.value  === "fahrenheit" && temperatureSelectField2.value === "celsius"){
        let celsius = Fahrenheit.celsius(inputField.value); // call method convertCelsiusToFahrenheit
        output = celsius;
        setIndicatorColor(celsius);
    }else if(temperatureSelectField1.value  === "fahrenheit" && temperatureSelectField2.value === "kelvin"){
        let kelvin = Fahrenheit.kelvin(inputField.value); // call method 
        output = kelvin;
        setIndicatorColor(Fahrenheit.celsius(inputField.value));
    }else if(temperatureSelectField1.value  === "fahrenheit" && temperatureSelectField2.value === "rankine"){
        let rankine = Fahrenheit.rankine(inputField.value); // call method 
        output = rankine;
        setIndicatorColor(Fahrenheit.celsius(inputField.value));
    }else if(temperatureSelectField1.value  === "kelvin" && temperatureSelectField2.value === "celsius"){
        let celsius = Kelvin.celsius(inputField.value); // call method 
        output = celsius;
        setIndicatorColor(celsius);
    }else if(temperatureSelectField1.value  === "kelvin" && temperatureSelectField2.value === "fahrenheit"){
        let fahrenheit = Kelvin.fahrenheit(inputField.value); // call method 
        setIndicatorColor(Kelvin.celsius(inputField.value));
    }else if(temperatureSelectField1.value  === "kelvin" && temperatureSelectField2.value === "rankine"){
        let rankine = Kelvin.rankine(inputField.value); // call method 
        output = rankine;
        setIndicatorColor(Kelvin.celsius(inputField.value));
    }else if(temperatureSelectField1.value  === "rankine" && temperatureSelectField2.value === "celsius"){
        let celsius = Rankine.celsius(inputField.value); // call method 
        output = celsius;
        setIndicatorColor(celsius);
    }else if(temperatureSelectField1.value  === "rankine" && temperatureSelectField2.value === "fahrenheit"){
        let fahrenheit = Rankine.fahrenheit(inputField.value); // call method 
        output = fahrenheit;
        setIndicatorColor(Rankine.celsius(inputField.value));
    }else if(temperatureSelectField1.value  === "rankine" && temperatureSelectField2.value === "kelvin"){
        let kelvin = Rankine.kelvin(inputField.value); // call method 
        output = kelvin;
        setIndicatorColor(Rankine.celsius(inputField.value));
    }

    outputField_temperature.innerHTML = output;
    
    

}

function setIndicatorColor(number){
    const temperature_indicator = document.querySelector(".temperature_indicator");
    if (number <= 0)
        temperature_indicator.style.backgroundColor = "#0000FF"  
    else if(number <= 15)
        temperature_indicator.style.backgroundColor = "#00FFFF"  
    else if(number <= 25)
        temperature_indicator.style.backgroundColor = "#00FF00"  
    else if(number <= 35)
        temperature_indicator.style.backgroundColor = "#FF0000";   
    else
        temperature_indicator.style.backgroundColor = "#FF0000";
    
    
}

const amount = document.querySelector(".inputField_amount");
amount.addEventListener("input", () => {
    
    convertCurrency();
    
})
async function convertCurrency(){ // async function always return promise, which represents the current state of the operation.
    console.log("entered async function ");

   

    // fetch('')
    // .then(response => response.json())
    // .then(data => console.log(data.conversion_rates.UAH))
    // .catch(error => console.error('Error:', error));

    
    const url = "https://v6.exchangerate-api.com/v6/e60fb30fbd57f2a9e8dde1f1/latest/USD";
    try{
        // await pauses execution until the API responds
        const response = await fetch(url); // The fetch() function returns a Promise which is fulfilled with a Response object representing the server's response. 

        if(!response.ok){ // checks the server response
            throw new Error(`Response status: ${response.status}`);
        }
        // extract response in the JSON formate
        const data = await response.json(); // await pauses execution until JSON is parsed
        runCurrencyConverter(data);
       
    }catch(error){
        console.error(error.message);

    }
    

    function runCurrencyConverter(data){
        
        const currencyField1 = document.querySelector(".currencyField1");
        const currencyField2 = document.querySelector(".currencyField2");
        
        
        const outputField_currency = document.querySelector(".outputField_currency");
        


        if(currencyField1.value === "USD" && currencyField2.value === "EUR"){
            let usd = amount.value; 
            outputField_currency.innerHTML = usd * data.conversion_rates.EUR;  //multiplies the amount in USD by the conversion rate of EUR to get the value in EUR
        }else if(currencyField1.value === "USD" && currencyField2.value === "JPY"){
            let usd = amount.value;
            outputField_currency.innerHTML = usd * data.conversion_rates.JPY; 
        }else if(currencyField1.value === "USD" && currencyField2.value === "UAH"){
            let usd = amount.value;
            outputField_currency.innerHTML = usd * data.conversion_rates.UAH; 
        }else if(currencyField1.value === "EUR" && currencyField2.value === "USD"){
            let usd = amount.value / data.conversion_rates.EUR;
            outputField_currency.innerHTML = usd ; 
        }else if(currencyField1.value === "EUR" && currencyField2.value === "JPY"){
            let usd = amount.value / data.conversion_rates.EUR;
            outputField_currency.innerHTML = usd * data.conversion_rates.JPY; 
        }else if(currencyField1.value === "EUR" && currencyField2.value === "UAH"){
            let usd = amount.value / data.conversion_rates.EUR;
            outputField_currency.innerHTML = usd * data.conversion_rates.UAH; 
        }else if(currencyField1.value === "JPY" && currencyField2.value === "USD"){
            let usd = amount.value / data.conversion_rates.JPY;
            outputField_currency.innerHTML = usd; 
        }else if(currencyField1.value === "JPY" && currencyField2.value === "EUR"){
            let usd = amount.value / data.conversion_rates.JPY;
            outputField_currency.innerHTML = usd * data.conversion_rates.EUR; 
        }else if(currencyField1.value === "JPY" && currencyField2.value === "UAH"){
            let usd = amount.value / data.conversion_rates.JPY;
            outputField_currency.innerHTML = usd * data.conversion_rates.UAH; 
        }else if(currencyField1.value === "UAH" && currencyField2.value === "USD"){
            let usd = amount.value / data.conversion_rates.UAH;
            outputField_currency.innerHTML = usd; 
        }
        else if(currencyField1.value === "UAH" && currencyField2.value === "EUR"){
            let usd = amount.value / data.conversion_rates.UAH;
            outputField_currency.innerHTML = usd * data.conversion_rates.EUR; 
        }else if(currencyField1.value === "UAH" && currencyField2.value === "JPY"){
            let usd = amount.value / data.conversion_rates.UAH;
            outputField_currency.innerHTML = usd * data.conversion_rates.JPY; 
        }
    }  
}
const inputField_speed =  document.querySelector(".inputField_speed");
inputField_speed.addEventListener("input", ()=> {
  runSpeedConverter();  
})
function runSpeedConverter(){
    const speedField1 = document.querySelector(".speedField1");
    const speedField2 = document.querySelector(".speedField2");
    
    const outputField1_speed = document.querySelector(".outputField1_speed");

    if(speedField1.value == "kmph" && speedField2.value == "mps"){
        outputField1_speed.innerHTML = inputField_speed.value / 1.609344;
    }
    else if(speedField1.value == "kmph" && speedField2.value == "fps"){
        outputField1_speed.innerHTML = inputField_speed.value / 1.09728;
    }else if(speedField1.value == "kmph" && speedField2.value == "yps"){
        outputField1_speed.innerHTML = inputField_speed.value / 0.911344;
    }else if(speedField1.value == "mps" && speedField2.value == "kmph"){
        outputField1_speed.innerHTML = inputField_speed.value * 3.6;
    }else if(speedField1.value == "mps" && speedField2.value == "fps"){
        outputField1_speed.innerHTML = inputField_speed.value * 3.28084;
    }else if(speedField1.value == "mps" && speedField2.value == "yps"){
        outputField1_speed.innerHTML = inputField_speed.value * 1.09361;
    }else if(speedField1.value == "fps" && speedField2.value == "kmph"){
        outputField1_speed.innerHTML = inputField_speed.value *  1.09728;
    }else if(speedField1.value == "fps" && speedField2.value == "mps"){
        outputField1_speed.innerHTML = inputField_speed.value * 0.3048;
    }else if(speedField1.value == "fps" && speedField2.value == "yps"){
        outputField1_speed.innerHTML = inputField_speed.value / 3;
    }else if(speedField1.value == "yps" && speedField2.value == "kmph"){
        outputField1_speed.innerHTML = inputField_speed.value  *  3.29184;
    }else if(speedField1.value == "yps" && speedField2.value == "mps"){
        outputField1_speed.innerHTML = inputField_speed.value  *  0.9144;
    }else if(speedField1.value == "yps" && speedField2.value == "fps"){
        outputField1_speed.innerHTML = inputField_speed.value  *  3;
    }


}


