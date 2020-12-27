/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇


let dice = document.querySelectorAll('.dice');
console.log(dice);

function rollTheDice() {
    /* 
    Returns a random integer between the specified values. 
    The value is no lower than `min`, 
    and is less than (but not equal to) `max`.
    */
    let min = 1;
    let max = 7;
    let random = Math.floor(Math.random() * (max - min) + min);

    // note: to change multiple elements with the same class name 
    // we need to iterate through all instances of element
    dice.forEach(el => el.style.visibility = 'hidden');
    
    setTimeout(() => {
        // note: 
        // `visibility: hidden` hides element but it still takes up space in layout
        // `display: none` (associated with .hidden class) removes element completely
        dice.forEach(el => el.style.visibility = 'visible');
        dice.forEach(el => el.classList.add('hidden'));
        if (random === 1) {
            document.querySelector('.face-one').classList.remove('hidden');
        }
        if (random === 2) {
            document.querySelector('.face-two').classList.remove('hidden');
        }
        if (random === 3) {
            document.querySelector('.face-three').classList.remove('hidden');
        }
        if (random === 4) {
            document.querySelector('.face-four').classList.remove('hidden');
        }
        if (random === 5) {
            document.querySelector('.face-five').classList.remove('hidden');
        }
        if (random === 6) {
            document.querySelector('.face-six').classList.remove('hidden');
        }
    }, 200);
        

    // five.style.backgroundColor = '#999';
    console.log(random);
}

const button = document.querySelector('.button');
button.addEventListener('click', rollTheDice, false);

document.addEventListener('DOMContentLoaded', function () {
    console.log('loaded');
    // const button = document.querySelector('.button');
    // button.addEventListener('click', rollTheDice, false);
});

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
