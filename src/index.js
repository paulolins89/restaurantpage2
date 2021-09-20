import addInfo from './homepage';
import addMenuItems from './menu';
import addContact from './contact';
import './style.css';

const content = document.getElementById('content');
content.appendChild(addInfo());

const tabs = document.querySelectorAll('.tablinks');
tabs.forEach(tab =>{
    tab.addEventListener('click',(e) => {
        console.log(e.target.id);
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
        if (e.target.id == 'hometab'){
            content.appendChild(addInfo());
        }else if (e.target.id == 'menutab'){
            content.appendChild(addMenuItems());
        }else if (e.target.id == 'contacttab'){
            content.appendChild(addContact());
        }
    })
});