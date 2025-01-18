const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 6.8
    const euroToday = 6.24
    const libraToday = 7.40

    if (currencySelect.value == "dolar") {
        //se o select estiver selecionado o valor de dolar, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }
    if (currencySelect.value == "euro") {
        //se o select estiver selecionado o valor de euro, entre aqui 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)

    }





    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",

    }).format(inputCurrencyValue)

}

function changeCurrency (){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
  

    
if(currencySelect.value == "dolar"){
   currencyName.innerHTML = "Dólar"
   currencyImage.src="./assets/dolar.png"
}

if(currencySelect.value == "euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src= "./assets/euro.png"
 }


 convertValues()
}


currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues)


