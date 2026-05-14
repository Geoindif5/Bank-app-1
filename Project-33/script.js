var current_balance_el = document.getElementById('current_balance_el');
var entered_amount_el = document.getElementById('entered_amount_el');
var user_name_input = document.getElementById('user_name_input');
var display_name = document.getElementById('display_name');

function credit() {
    var amount = entered_amount_el.value;
    var name = user_name_input.value;

    if (name !== "") { display_name.innerText = name; }

    // Using Number() instead of parseInt as per image_a3e254.png logic
    var account_balance = Number(current_balance_el.innerText) + Number(amount);

    // Displaying the result
    current_balance_el.innerHTML = Number(account_balance);

    entered_amount_el.value = "";
}

function debit() {
    var amount = entered_amount_el.value;
    var name = user_name_input.value;

    if (name !== "") { display_name.innerText = name; }

    // Using Number() for subtraction logic
    var account_balance = Number(current_balance_el.innerText) - Number(amount);

    // Updating the UI balance
    current_balance_el.innerHTML = Number(account_balance);

    entered_amount_el.value = "";
}