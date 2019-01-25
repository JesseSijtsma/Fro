let index = 0; 
let main = document.querySelector(".inhoud");
let links = document.querySelectorAll(".nav__menuitem");
let alleLinkjesArray = [];
links.forEach( (item) => {
    item.addEventListener('click', (e)=>{
        index = alleLinkjesArray.indexOf(item);
        makeActive(index);
    });
    alleLinkjesArray.push(item);
});
const pijlLinks = document.querySelector('.nav__pijl--links');
const pijlRechts = document.querySelector('.nav__pijl--rechts');
const makeActive = (num) => {
    removeActive();
    toonVerbergpijlen();
    alleLinkjesArray[num].classList.add("nav--actief");
    main.style.marginLeft = (-100*num) + 'vw';
};

const removeActive = () => {
    alleLinkjesArray.forEach( (item) =>{
        item.classList.remove("nav--actief");
    })
}

const volgende = () => {
    if(index < alleLinkjesArray.length - 1){
        index++
        makeActive(index);
    } else {
        index = 0;
    }
    makeActive(index);
}

const vorige = () => {
    if(index > 0) {
        index--
        makeActive(index);
    } else {
        index = alleLinkjesArray.length - 1;
    }
    makeActive(index);
}

const toonVerbergpijlen = () => {
    if(index == 0) {
        pijlLinks.style.display = 'none';
    } else {
        pijlLinks.style.display = 'block';
    }
    if(index == alleLinkjesArray.length - 1){
        pijlRechts.style.display = 'none';
    } else {
        pijlRechts.style.display = 'block';
    }
}

pijlRechts.addEventListener('click', volgende)
pijlLinks.addEventListener('click', vorige)

document.addEventListener('keyup', (e) =>{
    if(e.keyCode == 39 || e.keyCode == 32){
        volgende();
    }
    if(e.keyCode == 37){
        vorige();
    }
})

document.addEventListener('swiped-left', volgende);
document.addEventListener('swiped-right', vorige);

activeren(index);