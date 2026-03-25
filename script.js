function randomize() {
    const number = document.getElementById("number");
    const random = document.getElementById("random");
    console.log(Number.isInteger(number.value))
    if ((Number.isInteger(Number(number.value))) && (number.value >= 1)) {
        random.innerHTML = Math.floor(Math.random() * number.value)+1;
    } else {
        random.innerHTML = "&infin;"
    }
}