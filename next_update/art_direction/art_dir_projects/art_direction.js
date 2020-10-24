// alert("sup binches")
let xImages = document.querySelectorAll("img");

function removeModal() {
    let modal = document.querySelector(".modal");
    modal.innerHTML = '';
    modal.style.display = "none";
}

function displayModal(imgSrc) {
    let modal = document.querySelector(".modal");
    let imgNode = document.createElement("img");
    modal.onclick = function() {removeModal()};
    imgNode.className = "modal-image";
    imgNode.src = imgSrc; 
    modal.style.display = "grid";
    modal.appendChild(imgNode);  
}

for (i = 0; i < xImages.length; i++) {
    xImages[i].onclick =  function() { displayModal(this.getAttribute('src'))};
}


