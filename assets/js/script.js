"use strict";


// let clickBtn = document.querySelector(".click-btn");

// clickBtn.addEventListener("mousedown",function(){
//     this.classList.remove("btn-primary");
//     this.classList.add("btn-warning");

// })

// clickBtn.addEventListener("mousemove",function(){
//     this.classList.remove("btn-warning");
//     this.classList.add("btn-success");
// })

// let h1 = document.querySelector("h1");

// let input = document.getElementById("text-input");

// input.addEventListener("keyup",function(){
//     h1.innerText = this.value
// })



// let elem = document.querySelector("a");

//elem.setAttribute("href","https://kontakt.az/")

// console.log(elem.hasAttribute("hrefs"))

// let twitterIcon = document.querySelector(".twitter");

// let linkedinIcon = document.querySelector(".linkedin");

// let elem = document.querySelector("a");


// twitterIcon.addEventListener("click",function(){
//     if(elem.hasAttribute("href")){
//         elem.setAttribute("href","https://twitter.com/login?lang=tr")
//     }
// })


// linkedinIcon.addEventListener("click",function(){
//     if(elem.hasAttribute("href")){
//         elem.setAttribute("href","https://www.linkedin.com/")
//     }
// })





// let input1 = document.querySelector(".input1");

// let span1 = document.querySelector(".span1");

// let input2 = document.querySelector(".input2");

// let span2 = document.querySelector(".span2");

// let button = document.querySelector("button");

// input1.addEventListener("keyup", function () {
//     validation(this, span1, button);
// })


// input2.addEventListener("keyup", function () {
//     validation(this, span2, button);
// })



//form validation


// let inputs = document.querySelectorAll("input");

// let button = document.querySelector("button");

// inputs.forEach(input => {
//     input.addEventListener("keyup",function(){

//         validation(this,this.nextElementSibling);

//         inputs.forEach(element => {
//             if(!element.value.includes("@") || element.value === ""){
//                 button.setAttribute("disabled", "true")
//             }else{
//                 button.removeAttribute("disabled")
//             }
//         });
//     })
// });



// function validation(element, span) {
 
//     if (element.value.trim() === "") {
//         span.innerText = "Don't be empty"
//         span.classList.remove("d-none");

//     } else if (!element.value.includes("@")) {
//         span.innerText = "Email format is wrong";
//         span.classList.remove("d-none");
//     } else {
//         span.classList.add("d-none");
//     }
// }



// let tabHeaders = document.querySelectorAll(".tab-header .item");
// let tabContents = document.querySelectorAll(".tab-content .item");

// tabHeaders.forEach(tabHeader => {
//     tabHeader.addEventListener("click",function(){
//         document.querySelector(".active-tab").classList.remove("active-tab");
//         this.classList.add("active-tab");

//         tabContents.forEach(content => {
//             if(content.getAttribute("data-id") == this.getAttribute("data-id")){
//                 content.classList.remove("d-none")
//             }else{
//                 content.classList.add("d-none")
//             }
//         });

//     })
// });




