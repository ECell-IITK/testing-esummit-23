// document.addEventListener("scroll", (event) => {
//         console.log("scrolling")
//     }
// )
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   console.log("kuch toh hua")
// }
window.onscroll = function(){
    // console.log("hua")
    var scrollTop =  (document.documentElement || document.body.parentNode || document.body).scrollTop
    // console.log(scrollTop)
    let textBlocks = document.querySelectorAll(".side-texts-block");
    for(let i =0;i<textBlocks.length ;i+=1){
        if(i%2){
            textBlocks[i].style.transform = "translateX( calc( -100px + " + scrollTop/6 + "px))";
        }else{
            textBlocks[i].style.transform = "translateX(-" + scrollTop/6 + "px)";
        }
    }
}
// console.log("working")