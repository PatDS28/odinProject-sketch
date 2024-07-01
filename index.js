
const mainDiv = document.querySelector(".main");

function hoverEvent(buttons){
  buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "red";
    });
    button.addEventListener("mouseout", () => {
      // button.style.backgroundColor = "white";
    });
  });
  
}


function removeAllItems(container){
  while(container.firstChild){
    container.removeChild(container.firstChild)
  }
}


const buttons = document.querySelectorAll(".main div");
const customizeButton = document.querySelector(".customize");
customizeButton.addEventListener("click",function (e){
  removeAllItems(mainDiv);

  do{
    var gridCount = parseInt(prompt("Type the number of grid n x n"));
  }while(!(gridCount>0 && gridCount<=100));
  
  for(var i = 1;i<=gridCount;i++){
    const div = document.createElement("div");
    div.classList.add(`div-${i}`);
    div.setAttribute("style",`width: calc(100%/${gridCount}); height: calc(100%/${gridCount});`)
    mainDiv.appendChild(div);
    for(var j = 1; j<=gridCount;j++){
      const div = document.createElement("div");
      div.classList.add(`div-${i}-${j}`);
      div.setAttribute("style",`width: calc(100%/${gridCount}); height: calc(100%/${gridCount});`)
      mainDiv.appendChild(div);
    }
  }
  const newDiv = document.querySelectorAll(".main Div");
  hoverEvent(newDiv);
});
