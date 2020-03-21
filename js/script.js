let temp = document.getElementById('tempInput');
let submitBtn = document.getElementById('submit');
let clearBtn = document.getElementById('clear');
let display = document.getElementById('display');

const convert = (temp) => {
    let indicator = document.querySelector('input[name="tempType"]:checked');
    console.log(indicator.value)
    //converts from F to C
    if (indicator.value === 'F') {
        var newTemp = Math.round((temp - 32) * (5 / 9));
        //changes color to indicate if it's hot or cold
        if (newTemp >= 25) {
            console.log('help')
            display.style.color = 'red';
        } else if (newTemp <= 0) {
            display.style.color = 'blue';
        }
        display.textContent = newTemp + "\xB0C"; 

    //converts from C to F
    } else {
        var newTemp = Math.round((temp * 9 / 5) + 32);
        if (newTemp >= 77) {
            display.style.color = 'red';
        } else if (newTemp <= 32) {
            display.style.color = 'blue';
        }
        display.textContent = newTemp + "\xB0F";
    }
}

submitBtn.addEventListener("click", (e) => {
    convert(temp.value);
});

clearBtn.addEventListener("click", (e) => {
    temp.value = '';
    display.textContent = '';
})