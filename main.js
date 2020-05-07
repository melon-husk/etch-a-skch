

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.innerText = i+1;
        container.appendChild(cell).className = "grid-item";
        container.appendChild(cell).id = i;
    };
    
};
makeGrid(8, 8);
let divArray = document.getElementById('container').children;

for(let i of divArray) {
    
    i.addEventListener('mouseover', function () {
        black(i);
    });
}


function black(i) {
    i.style.backgroundColor="black";
    console.log('in black')
}
function reset() {
    for(let i of divArray) {
    
        i.style.backgroundColor = "white";
    }
}