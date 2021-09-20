import friedFishImg from './img/catbigfish.jpg';
import sashimiImg from './img/catblobfish.jpg';
import temakiImg from './img/cattemaki.jpg';
import bbqImg from './img/catbbq.jpg';
import grandmaImg from './img/catgrandma.jpg';

export default function addMenuItems(){
    const menuitems = document.createElement('div');
    menuitems.classList.add("menuitems");

    const item1 = document.createElement('div');
    item1.setAttribute('id', 'item1');
    const pic1 = document.createElement('img');
    pic1.src = friedFishImg;
    item1.appendChild(pic1);
    const cap1 = document.createElement('figcaption');
    cap1.innerHTML = "Fresh Fried Fish (ask for the fish of the day!"
    item1.appendChild(cap1);
    menuitems.appendChild(item1);

    const item2 = document.createElement('div');
    item2.setAttribute('id', 'item2');
    const pic2 = document.createElement('img');
    pic2.src = sashimiImg;
    item2.appendChild(pic2);
    const cap2 = document.createElement('figcaption');
    cap2.innerHTML = "Sashimi"
    item2.appendChild(cap2);
    menuitems.appendChild(item2);

    const item3 = document.createElement('div');
    item3.setAttribute('id', 'item3');
    const pic3 = document.createElement('img');
    pic3.src = temakiImg;
    item3.appendChild(pic3);
    const cap3 = document.createElement('figcaption');
    cap3.innerHTML = "Temaki"
    item3.appendChild(cap3);
    menuitems.appendChild(item3);

    const item4 = document.createElement('div');
    item4.setAttribute('id', 'item4');
    const pic4 = document.createElement('img');
    pic4.src = bbqImg;
    item4.appendChild(pic4);
    const cap4 = document.createElement('figcaption');
    cap4.innerHTML = "Japanese BBQ (with an ice-cold beer!)"
    item4.appendChild(cap4);
    menuitems.appendChild(item4);

    const item5 = document.createElement('div');
    item5.setAttribute('id', 'item5');
    const pic5 = document.createElement('img');
    pic5.src = grandmaImg;
    item5.appendChild(pic5);
    const cap5 = document.createElement('figcaption');
    cap5.innerHTML = "Grandma's Daily Special"
    item5.appendChild(cap5);
    menuitems.appendChild(item5);

    return menuitems
}