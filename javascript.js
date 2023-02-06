// Accessing main two divs (children of body)
var parentDiv = document.querySelector(".parentdiv");
var controlsDiv = document.querySelector(".controls");

// Adding subdivs to controls
for(let i=0; i<3; i++){
    var controlButtons = document.createElement("div");
    controlsDiv.appendChild(controlButtons);
}

// Creating form 
var formElement = document.createElement("form");

// From Input element
var formInput = document.createElement("input");
formInput.style.width = "150px";
formInput.setAttribute("type", "number"); 
formInput.setAttribute("max", "100"); 
formInput.setAttribute("min", "16"); 
formInput.setAttribute("placeholder", "16"); 
formElement.appendChild(formInput);

//Form Submit button
formSubmit = document.createElement("input");
formSubmit.setAttribute("type", "submit");
formSubmit.setAttribute("value", "Create Grid"); 
formElement.appendChild(formSubmit);

controlsDiv.firstElementChild.appendChild(formElement); 

var userInput = 16;

// creating subdivs and their children
for(let i=0; i<userInput; i++){
    var subdivs = document.createElement("div");
    subdivs.classList = "subdiv";

    for(let i=0; i<userInput; i++){
        var subdivChilds = document.createElement("div");
        subdivChilds.classList = "child";
        subdivChilds.style.height = 760 / userInput + "px";
        subdivs.appendChild(subdivChilds);
    }

    parentDiv.appendChild(subdivs);
}

// Changing backgroundcolor to coral on mouseover
var childDivs = Array.from(document.querySelectorAll(".child"));
childDivs.forEach((child) => {
    child.addEventListener("mouseover", (e) => { 
        child.style.backgroundColor = "coral";
    });
});

// Black color button
var blackColorButton = document.createElement("div");
blackColorButton.textContent = "Black";
blackColorButton.style.borderBottom = "2px solid rebeccapurple";
controlsDiv.children[1].appendChild(blackColorButton);

// changing backgroundcolor to black on mouseover
blackColorButton.addEventListener("click", (e) => {
    childDivs.forEach(child => {
        child.addEventListener("mouseover", (e) => { 
            child.style.backgroundColor = "black";
        });
    });
});

// Rgb color button
var rgbColorButton = document.createElement("div");
rgbColorButton.textContent = "RGB";
controlsDiv.children[1].appendChild(rgbColorButton);

//changing backgroundcolor to random rgb on mouseover
rgbColorButton.addEventListener("click", (e) => {
    childDivs.forEach(child => {
        child.addEventListener("mouseover", (e) => {
            var a = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random()*255);
            var c = Math.floor(Math.random()*255);
            child.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
        });
    });
});

// Resetting grid background color back to white
controlsDiv.children[2].textContent = "Reset";
controlsDiv.children[2].addEventListener("click", reset);
function reset(e){
    childDivs.forEach( child => {
        child.style.backgroundColor = "#fff";
    })
};

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    userInput = formInput.value;
    var parentDivChildren = parentDiv.children;
    Array.from(parentDivChildren).forEach(item => {
        item.remove();
    });
    e.preventDefault();
    userInput = formInput.value;
    console.log(userInput);
    for(let i=0; i<userInput; i++){
        var subdivs = document.createElement("div");
        subdivs.classList = "subdiv";
    
        for(let i=0; i<userInput; i++){
            var subdivChilds = document.createElement("div");
            subdivChilds.classList = "child";
            subdivChilds.style.height = 760 / userInput + "px";
            subdivs.appendChild(subdivChilds);
        }
    
        parentDiv.appendChild(subdivs);
    }
    
    // Changing backgroundcolor to coral on mouseover
    var childDivs = Array.from(document.querySelectorAll(".child"));
    childDivs.forEach((child) => {
        child.addEventListener("mouseover", (e) => { 
            child.style.backgroundColor = "coral";
        });
    });
    
    // changing backgroundcolor to black on mouseover
    blackColorButton.addEventListener("click", (e) => {
        childDivs.forEach(child => {
            child.addEventListener("mouseover", (e) => { 
                child.style.backgroundColor = "black";
            });
        });
    });
    
    //changing backgroundcolor to random rgb on mouseover
    rgbColorButton.addEventListener("click", (e) => {
        childDivs.forEach(child => {
            child.addEventListener("mouseover", (e) => {
                var a = Math.floor(Math.random() * 256);
                var b = Math.floor(Math.random()*255);
                var c = Math.floor(Math.random()*255);
                child.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
            });
        });
    });
    
    // Resetting grid background color back to white
    controlsDiv.children[2].textContent = "Reset";
    controlsDiv.children[2].addEventListener("click", reset);
    function reset(e){
        childDivs.forEach( child => {
            child.style.backgroundColor = "#fff";
        })
    };


});