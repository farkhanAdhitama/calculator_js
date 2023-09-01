var display = document.querySelector(".display")
var buttons = document.querySelectorAll("button")
var specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// fungsi untuk menghitung
const calculate = (btnValue) => {
    if(btnValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC"){
        output = "";
    } else if(btnValue === "DEL"){
        output =  output.toString().slice(0, -1);
    } else{
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output
}

// tambahkan event listener ke tombol, panggil fungsi saat diklik
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})