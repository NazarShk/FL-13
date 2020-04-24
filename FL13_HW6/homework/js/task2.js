
let someWord = prompt('Please, enter the word');
const divisor = 2;

if (someWord.length === 0 && someWord.trim() === '') {
    alert('Invalid value')

} else if (someWord.length % divisor === 0) {
    alert(someWord.substring(someWord.length / divisor - 1, someWord.length / divisor + 1))

} else {
    alert(someWord.substring(Math.floor(someWord.length / divisor), Math.floor(someWord.length / divisor) + 1))
}



