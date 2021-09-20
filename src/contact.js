import mapPic from './img/ksnip_20210917-132834.png';

export default function addContact(){

    const contact = document.createElement('div');

    const number = document.createElement('h2');
    number.innerHTML = "Number: 123456789";
    contact.appendChild(number);

    const email = document.createElement('h2');
    email.innerHTML = "Email: asha@sashassushi.com";
    contact.appendChild(email);

    const map = document.createElement('img');
    map.src = mapPic;
    map.setAttribute('id','mappic');
    contact.appendChild(map);

    return contact;

}