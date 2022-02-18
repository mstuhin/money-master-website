// Getting All Input Value
const incomeField = document.getElementById("income-field");
const foodField = document.getElementById("food-field");
const rentField = document.getElementById("rent-field");
const clothesField = document.getElementById("clothes-field");
const saveField = document.getElementById("save-field");


function validity(errorID, event) {

    if (isNaN(event.target.value)) {
        document.getElementById(errorID).innerText = "Should be a number";
        document.getElementById(errorID).style.display = "block";
    }

    else if (parseFloat(event.target.value) < 0) {
        document.getElementById(errorID).innerText = "Should be a Positive number";
        document.getElementById(errorID).style.display = "block";
    } else {
        document.getElementById(errorID).style.display = "none";
    }
}


// Income field
incomeField.addEventListener("keyup", function (event) {
    validity("income-error", event);
});

foodField.addEventListener("keyup", function (event) {
    validity("food-error", event);
});


rentField.addEventListener("keyup", function (event) {
    validity("rent-error", event);
});

clothesField.addEventListener("keyup", function (event) {
    validity("cloths-error", event);
});

saveField.addEventListener("keyup", function (event) {
    validity("savingValMgs", event);
});


document.getElementById("calculate-btn").addEventListener("click", function () {
    // checking number validity
    if (
        !isNaN(foodField.value) &&
        !isNaN(incomeField.value) &&
        !isNaN(rentField.value) &&
        !isNaN(clothesField.value)
    ) {
        if (
            parseFloat(foodField.value) > 0 &&
            parseFloat(rentField.value) > 0 &&
            parseFloat(clothesField.value) > 0
        ) {

            let totalExpense =
                parseFloat(foodField.value) +
                parseFloat(rentField.value) +
                parseFloat(clothesField.value);
            let IncomeFieldCal = parseFloat(incomeField.value);

            if (IncomeFieldCal > totalExpense) {
                let Balance = IncomeFieldCal - totalExpense;
                document.getElementById("total-expenses").innerText = totalExpense;
                document.getElementById("balance").innerText = Balance;
            } else {
                document.getElementById("balance-error").style.display = "block";
            }
        }
    }
});


document.getElementById("saving-btn").addEventListener("click", function () {
    if (!isNaN(saveField.value)) {
        if (parseFloat(saveField.value) > 0) {
            saveField.style.borderBottom = "none";
            let income = parseFloat(incomeField.value);
            let currentBalance = parseFloat(
                document.getElementById("balance").innerText
            );
            const savingAmount = (parseFloat(saveField.value) * income) / 100;
            const remainingBalance = currentBalance - savingAmount;

            document.getElementById("saving").innerText = savingAmount;
            document.getElementById("remainigBalance").innerText = remainingBalance;

            if (savingAmount > currentBalance) {
                document.getElementById("remainigBalance").style.color = "red";
                document.getElementById("savingValMgs").style.display = "block";
                document.getElementById("savingValMgs").innerText =
                    "Not enough Balance, Please Earn more or save less";
            } else {
                document.getElementById("remainigBalance").style.color = "green";
            }
        } else {

            saveField.style.borderBottom = "1px solid red";
            document.getElementById("savingValMgs").style.display = "block";
            document.getElementById("savingValMgs").innerText = "Please input a Rate";
        }
    }
});
