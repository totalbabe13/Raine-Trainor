alert("sup binches")

let xImages = document.querySelectorAll("img");
let modal = document.querySelector(".modal")
let imageSources = []

function testFunction() {
  console.log("testing on click")
  
//   imgObj.style.border = "3px solid lime";
} 


// 1. Loop through ximages collection and select each image element and its source
// 2. add onclick event listener to image elements 

for (i = 0; i < xImages.length; i++) {
    xImages[i].onclick = function(){
        console.log('test?')
        let srcTest = this.getAttribute('src')
        //  console.log(srcTest)
        modal.style.display = "block"        
    
        }
    }
// xImages[i].style.border = "3px solid lime";
// 3. Write OnCLICK function: 
//    When onclick: 
//    a.   Modal display on
//    b.   Insert child element(image) FULL SCREEN

// 4.   Add event listener to modal to toggle modal display

