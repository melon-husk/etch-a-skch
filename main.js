

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        
        container.appendChild(cell).className = "grid-item";
        container.appendChild(cell).id = i;
    };
    
};
makeGrid(16, 16);
let divArray = document.getElementById('container').children;

for(let i of divArray) {
    
    i.addEventListener('mouseover', function () {
        rainbow(i);
    });
}


function black(i) {
    //i.style.backgroundColor="black";
    i.setAttribute("style","border:1px solid black; background: black;");
    //console.log('in black')
}

function reset() {
    for(let i of divArray) {
        i.style.backgroundColor = "white";
        i.setAttribute("style","");
    }
}
function rainbow(i) {
   let r = Math.floor(Math.random() * 256);
   let g = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);
   i.setAttribute("style",`border:1px solid rgb(${r},${g},${b}); background: rgb(${r},${g},${b});`);
} 