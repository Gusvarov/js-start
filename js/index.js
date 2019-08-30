let message = 'Hello Javascript';
alert(message);
message = 'Nice to meet you';
alert(message);

const userAge = parseInt(prompt('What is your age?', ''));
alert('Your age is ' + userAge);

const nextAge = addOne(userAge);
alert('Next year you will be ' + nextAge);
/*
let yourAge = prompt('Enter your age','');
if ( yourAge >= 18 && yourAge <= 65 ) {
    alert('Hi adult');
} else if( yourAge >= 65) {
    alert('hi old man');
} else {
    alert('Hi kid')
}*/

function addOne(value) {
    const newValue = value + 1;
    return newValue;
}