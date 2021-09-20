import infoPic from './img/catsashimi.jpg'

export default function addInfo(){
    const info = document.createElement('div');
    info.classList.add('info');
    
    const slogan = document.createElement('h2');
    slogan.innerHTML = "Tradition, honor, cats.";
    info.appendChild(slogan);

    const pic = document.createElement('img');
    pic.src = infoPic;
    pic.setAttribute('id', 'infoPic');
    info.appendChild(pic);
    
    return info;
}