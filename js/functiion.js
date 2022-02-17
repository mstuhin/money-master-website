


// function claculate() {
//     let foodValue = document.getElementById("food-cost").value;
//     let rentValue = document.getElementById("rent-cost").value;
//     let clothesValue = document.getElementById("clothes-cost").value;
//     let expensesValue = document.getElementById("Expenses-total")
//     let totalCost = 
//     expensesValue.innerText = farseFloat(foodValue.value + rentValue.value + clothesValue.value);
// }


const claBt = document.getElementById("claculate-bt");

claBt.addEventListener('click', function () {
    const priceResult = document.getElementById("Expenses-total");
    const lastBalanec = document.getElementById("balance");
    const foodPrice = document.getElementById("food-cost");
    const rentPrice = document.getElementById("rent-cost");
    const clothesPrice = document.getElementById("clothes-cost");
    const corentBalance = document.getElementById("income");


    const sumTotal = parseInt(foodPrice.value) + parseInt(rentPrice.value) + parseInt(clothesPrice.value);

    priceResult.innerText = sumTotal;

    const muinus = parseInt(sumTotal.value) - parseInt(corentBalance.vlue);
    lastBalanec.innerText = muinus;


})