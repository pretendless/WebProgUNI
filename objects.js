
let cntbutton = document.querySelector('.contacts-button');
let sliderbx = document.querySelector('.sliding_box');

cntbutton.onclick = function() {
    console.log(sliderbx.value);
    if(sliderbx.classList.contains('open')) 
        sliderbx.classList.remove('open')
    else
        sliderbx.classList.add('open');
}