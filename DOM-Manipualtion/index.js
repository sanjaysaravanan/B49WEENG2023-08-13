console.log('Helo B49WEENG');

// Create an element or tag as JS Object

// div
const div = document.createElement('div');
console.log('div', div);

// innerHTML
div.innerHTML = '<h1>Helo B49WEENG</h1>';

// innerText
// div.innerText = '<h1>Helo B49WEENG</h1>';


const returnVal = document.body.appendChild(div);

console.log(returnVal);


const a = document.createElement('a');
console.log('a', a);

// innerText
a.innerText = 'Click Here';

a.setAttribute('href', 'https://google.com');

document.body.append(a);


// append
// const returnVal = document.body.append(div, a);

// console.log(returnVal);





