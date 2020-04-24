let checknumber = prompt('checknumber', '');
let tipPercentage = prompt('tipPercentage', '');
const percent = 100;
let totalSum = checknumber * (tipPercentage / percent);
// totalSum = totalSum.toFixed(2);
let sumToPay = checknumber + totalSum;
if (checknumber < 0 || tipPercentage < 0) {
    alert('Invalid input data');
} else {
    alert(
       `
        Check number:  ${checknumber}
        Tip:  ${tipPercentage}%
        Tip amount:   ${totalSum}
        Total sum to pay:  ${sumToPay}`)
}
