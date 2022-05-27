// DOM for value of input

let inEl = document.getElementById("number")

// DOM for numbers before conversion

let metEl = document.getElementById("met-n")
let feet2El = document.getElementById("feet-2")
let litEl = document.getElementById("lit-n")
let gal2El = document.getElementById("gal-2")
let kilEl = document.getElementById("kil-n")
let pou2El = document.getElementById("pou-2")

// DOM for numbers that should be changed

let feetEl = document.getElementById("feet-n")
let met2El = document.getElementById("met-2")
let galEl = document.getElementById("gal-n")
let lit2El = document.getElementById("lit-2")
let pouEl = document.getElementById("pou-n")
let kil2El = document.getElementById("kil-2")

function unitchange () {

    // assigning input values
    metEl.textContent =  inEl.value
    feet2El.textContent = inEl.value
    litEl.textContent = inEl.value
    gal2El.textContent = inEl.value
    kilEl.textContent = inEl.value
    pou2El.textContent = inEl.value

    // changing meters to feet and opposite
    feetEl.textContent = (inEl.value * 3.2808).toFixed(3)
    met2El.textContent = (inEl.value / 3.2808).toFixed(3)

    // changing liters to gallons and opposite
    galEl.textContent = (inEl.value * 0.2641722).toFixed(3)
    lit2El.textContent = (inEl.value * 3.785).toFixed(3)
    

    // changing kilos to pounds and opposite
    pouEl.textContent = (inEl.value * 2.2046).toFixed(3)
    kil2El.textContent = (inEl.value / 2.2046).toFixed(3)

}