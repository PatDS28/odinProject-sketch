

// for(let i = 1;i<16;i++){
//   const div = document.createElement("div");
//   for(let j = 1; j<16;j++){
//     const div = document.createElement("div");
//   }
// }

const div = document.createElement("div");
const mainDiv = document.querySelector(".main");

for(var i = 1;i<16;i++){
  console.log(i);
  const div = document.createElement("div");
  // div.classList.add(`div ${i}-${j}`);
  mainDiv.appendChild(div);
  for(var j = 1; j<16;j++){
    console.log(j);
    // div.classList.add(`div ${i}-${j}`);
    const div = document.createElement("div");
    mainDiv.appendChild(div);
    
  }
}


// mainDiv.appendChild(div);