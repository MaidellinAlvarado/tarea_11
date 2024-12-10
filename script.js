

let el = document.createElement('p');
el.innerText = '';


document.body.append(el);

el.remove();

document.body.prepend(el);



let div = document.createElement('div');
div.innerText = 'Soy un texto';
el.replaceWith(div);


document.body.replaceChild(el, div);
document.body.removeChild(el);
document.body.appendChild(el);


let nameElement = document.createElement('p');
nameElement.innerText = 'Mi nombre es [Maidellin Alvarado ]';
nameElement.style.backgroundColor = 'lightblue'; 
document.body.appendChild(nameElement);



