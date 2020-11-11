import {modelData} from "./database.js";

var name,mAtt,desc,smPict,mIg;

name = document.getElementById('model-name')
desc = document.getElementById('model-desc')
smPict = document.getElementById('c-small-pict')
mAtt = document.querySelectorAll('.m-att-circle')
mIg = document.getElementById("m-ig")

name.innerHTML = modelData[0].name;
for(let i=0;i<mAtt.length;i++){
    mAtt[0].innerHTML = modelData[0].height;
    mAtt[1].innerHTML = modelData[0].bust;
    mAtt[2].innerHTML = modelData[0].waist;
    mAtt[3].innerHTML = modelData[0].hips;
}
desc.innerHTML = modelData[0].desc;
smPict.src = modelData[0].smPict;
mIg.innerHTML = `@${modelData[0].ig}`;
mIg.href = `https://www.instagram.com/${modelData[0].ig}`;
console.log(mIg.getAttribute('href'))

var sliderImg = document.querySelector('.c-big-pict');
var dot = document.querySelectorAll('.dot')
var sliderSize = -sliderImg.clientWidth;
var count = 0;

const dotActive = (count) => {
    dot[count].classList.add('active')
}

const dotRemove = () => {
    dot.forEach(item=> {
        item.classList.remove('active')
    })
}

const sliderMove = (count) => {
    dotRemove();
    sliderImg.style.transform = `translateX(${sliderSize*count}px)`;
    dotActive(count)
}

setInterval(() => {
    count++;
    if(count>=3){
        count=0;
        sliderMove(count)
    }else{
        sliderMove(count)
    }
}, 5000);

for(let i=0;i<dot.length;i++){
    dot[i].addEventListener("click",()=>{
        count = i;
        sliderMove(count);
    })
}
