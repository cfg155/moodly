const database = [{
    name: "Du Juan",
    height: `5' 11"`,
    bust: `33"`,
    waist: `24"`,
    hips: `34"`,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas eleifend tristique varius nunc. Turpis dolor sollicitudin adipiscing id ac, interdum.",
    bgPict: "assets/mg-du_juan.jpg",
    smPict: "assets/ig-du_juan.jpg",
    ig: "modeldujuan_fanpage"
},{
    name: "Laura",
    height: `5' 11"`,
    bust: `29"`,
    waist: `23.5"`,
    hips: `34.5"`,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas eleifend tristique varius nunc. Turpis dolor sollicitudin adipiscing id ac, interdum.",
    bgPict: "assets/mg-laura.jpg",
    smPict: "assets/ig-laura.jpg",
    ig: "Laura_Turka"
},{
    name: "Sarah Amstrong",
    height: `5' 10"`,
    bust: `32"`,
    waist: `24"`,
    hips: `34"`,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas egestas eleifend tristique varius nunc. Turpis dolor sollicitudin adipiscing id ac, interdum.",
    bgPict: "assets/mg-sarah_amstrong.jpg",
    smPict: "assets/ig-sarah_amstrong.jpg",
    ig: "saraharmsy"
}]
// lasngkajnakjfnak------------------------------
var modelData = [];
modelData = database;

var name,mAtt,desc,smPict,mIg,bgPict;

name = document.getElementById('model-name')
desc = document.getElementById('model-desc')
smPict = document.getElementById('c-small-pict')
mAtt = document.querySelectorAll('.m-att-circle')
mIg = document.getElementById("m-ig")

bgPict = document.querySelectorAll('.c-big-pict img')
for(let i=0;i<bgPict.length;i++){
    bgPict[i].src = modelData[i].bgPict
    console.log(bgPict[i].getAttribute('src'))
}

var dataSlide = (count) =>{
    name.innerHTML = modelData[count].name;
    for(let i=0;i<mAtt.length;i++){
        mAtt[0].innerHTML = modelData[count].height;
        mAtt[1].innerHTML = modelData[count].bust;
        mAtt[2].innerHTML = modelData[count].waist;
        mAtt[3].innerHTML = modelData[count].hips;
    }
    desc.innerHTML = modelData[count].desc;
    smPict.src = modelData[count].smPict;
    mIg.innerHTML = `@${modelData[count].ig}`;
    mIg.href = `https://www.instagram.com/${modelData[count].ig}`;
}

var count = 0;
dataSlide(count);
var sliderImg = document.querySelector('.c-big-pict');
var cBigContainer = document.querySelector('.c-big-pict-container')
var dot = document.querySelectorAll('.dot')
var sliderSize = -cBigContainer.clientWidth;
var cTxtVisible = document.querySelector('.c-txt-visible')
var cSmallPict = document.querySelector('.c-small-pict-visible')

const dotActive = (count) => {
    dot[count].classList.add('dot-active')
}

const dotRemove = () => {
    dot.forEach(item=> {
        item.classList.remove('dot-active')
    })
}

const sliderMove = (count) => {
    dotRemove();
    sliderImg.style.transform = `translateX(${sliderSize*count}px)`;
    cTxtVisible.classList.add('c-txt-nonVisible');
    cSmallPict.classList.add('c-small-pict-nonVisible')
    setTimeout(() => {
        dataSlide(count);
        cTxtVisible.classList.remove('c-txt-nonVisible')
        cSmallPict.classList.remove('c-small-pict-nonVisible')
    }, 1000);
    dotActive(count);
}

var slideInverval;

for(let i=0;i<dot.length;i++){
    dot[i].addEventListener("click",()=>{
        clearInterval(slideInverval)
        count = i;
        sliderMove(count);
        slideInverval = setInterval(slideFunc,5000);
    })
}

const slideFunc = () => {
    count++;
    if(count>=3){
        count=0;
        sliderMove(count)
    }else{
        sliderMove(count)
    }
}
clearInterval(slideInverval)
slideInverval = setInterval(slideFunc,5000);

// Scrolling
var aboutUsLeft = document.querySelector('.about-us-left')
var screenSize = window.innerHeight/1.5;
var photoLayout = document.querySelector('.photos-layout')

var photoDiv = [];
var getPhotoDiv;
for(let i=0;i<photoLayout.children.length ;i++){
    getPhotoDiv = photoLayout.querySelector(`.img${i+1}`)
    photoDiv.push(getPhotoDiv)
}

window.addEventListener("scroll",()=>{
    var aboutUseLeftTop = aboutUsLeft.getBoundingClientRect().top;
    if(aboutUseLeftTop<screenSize){
        aboutUsLeft.classList.add('about-us-slide')
        for(let i=0;i<photoDiv.length;i++){
            photoDiv[i].style.transform = "translateX(0px)";
            photoDiv[i].style.opacity = "1";  
            photoDiv[i].style.transition = `transform ${2+i}s,opacity 1s ease-in`;
        }
    }
})

// Scaling Pricing
var packageItem = document.querySelectorAll('.package-item')
for(let i=0;i<packageItem.length;i++){
    packageItem[i].addEventListener("mouseover",()=>{
        packageItem[i].style.transform = "scale(1.2)";
        packageItem[i].style.boxShadow = "0px 0px 22px -1px rgba(0,0,0,0.75)"
        packageItem[i].style.transition = "transform 1s,box-shadow 1s";
    });

    packageItem[i].addEventListener("mouseout",()=>{
        packageItem[i].style.transform = "none";
        packageItem[i].style.boxShadow = "none";
        packageItem[i].style.transition = "transform 1s,box-shadow 1s";
    });
}