// workshop circle

var scrollTop =  (document.documentElement || document.body.parentNode || document.body).scrollTop
// console.log(scrollTop)
console.log(window.innerHeight)
var circle = document.querySelector(".workshop-home-circle")
var circleWidth = circle.offsetWidth;
var circle1 = document.querySelector(".workshop-home-arc")
var circle1Width  = circle1.offsetWidth;
var circle2 = document.querySelector(".workshop-home-outer-circle1")
var circle2Width = circle2.offsetWidth;
var circleOuter = document.querySelector(".workshop-home-outer-circle2")
var circleOuterWidth = circleOuter.offsetWidth;
// if(window.innerWidth < 600){
//     document.documentElement.style.setProperty('--inner_circle', '150px');
// }
var description = document.querySelector(".workshop-description")
description.addEventListener("scroll",function(){
    var heading = document.querySelector(".workshop-heading")
    // console.log(circleHeight)
    if(description.scrollTop > window.innerHeight/20){
        circle.style.left = "-" + circleWidth/2 +"px"
        circle1.style.left = "-" + circle1Width/2 +"px"
        circle2.style.left = "-" + circle2Width/2 +"px"
        circleOuter.style.left = "-" + circleOuterWidth/2 +"px"
        heading.classList.add("workshop-heading-active")
    }else{
        circle.style.left =  "calc(50% - " + circleWidth  + "px / 2)"
        circle1.style.left = "calc(50% - " + circle1Width  + "px / 2)"
        circle2.style.left = "calc(50% - " + circle2Width  + "px / 2)"
        circleOuter.style.left = "calc(50% - " + circleOuterWidth  + "px / 2)"
        heading.classList.remove("workshop-heading-active")

    }
})

var elmntToView = document.getElementById("sectionId");
elmntToView.scrollIntoView();
// console.log(description)
// console.log(description.scrollTop)
// console.log(description.scrollHeight)
// console.log(description.clientHeight)
// window.onscroll = function() {
//     var distanceScrolled = document.description.scrollTop;
//     console.log('Scrolled: ' + distanceScrolled);
// }


// landing page