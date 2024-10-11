const container = document.getElementById('container');
const btn = document.getElementById('btn');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');
const navLinks = document.getElementById('nav-links');

// JS number 1
// WriteaJavaScript function that takes an array of numbers and returns an array of the
//  even numbers.
function getEvenNumbers(arr) {
    return arr.filter(number => {
        return number % 2 === 0;
    });
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 24, 99, 200];
const evenNumbers = getEvenNumbers(numbers);

console.log(evenNumbers);
document.getElementById('result').innerHTML = evenNumbers;

// JS number 2
//  AdditionalChallenge: Implement a simple event listener that changes the background
//  color of a div when clicked.
const colors = ['red', 'green', 'blue', 'yellow']
var i = 0

btn.addEventListener('click', () => {
    if(i === colors.length ){
        i = 0
        container.style.backgroundColor = colors[i];
    } else {
        container.style.backgroundColor = colors[i];
        i++       
    }
    
})

iconOpen.addEventListener('click', () => {
    iconOpen.style.display = 'none';
    iconClose.style.display = 'block';
    navLinks.style.display = 'block';
})

iconClose.addEventListener('click', () => {
    iconClose.style.display = 'none';
    iconOpen.style.display = 'block';
    navLinks.style.display = 'none';
})