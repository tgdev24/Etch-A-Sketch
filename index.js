var grids = document.createElement("div");
grids.classList.add("grid_container");
grids.style.cssText = "display: grid;grid-column-gap: 1px; width: 960px; margin-left: 24.5%; grid-row-gap:1px;background-color: skyblue;grid-template-columns: repeat(16,1fr);padding: 1px;";

for(var i=0; i<16*16; i++){
    const div = document.createElement("div");
    //    div.textContent = "Each grid " + i;
    div.style.cssText = "background-color:lightblue; border: 1px solid black; padding:20px; font-size: 20px; text-align:center;";
    grids.appendChild(div);
}
document.body.appendChild(grids);

const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
    var num = prompt("Please enter the number of columns and rows:", "16");
    while(grids.firstChild){
        grids.removeChild(grids.firstChild);
    }
    for(var i=0; i<num*num; i++){
        const div = document.createElement("div");
        //    div.textContent = "Each grid " + i;
        div.style.cssText = "background-color:lightblue; border: 1px solid black; padding:20px; font-size: 20px; text-align:center;";
        grids.appendChild(div);
    }
    grids.style.cssText = "display: grid;grid-column-gap: 1px; width: 960px; margin-left: 24.5%; grid-row-gap:1px;background-color: skyblue;grid-template-columns: repeat(" + num + ",1fr);padding: 1px;";
    const gridds = document.getElementsByClassName("grid_container")[0].querySelectorAll("div");
    gridds.forEach((div) =>{
        div.style.backgroundColor = "lightblue";
    });
    const squares = document.getElementsByClassName("grid_container")[0].querySelectorAll("div");
    squares.forEach((div) =>{
        div.addEventListener("mouseenter", (e) => {
            div.style.backgroundColor = "black";
        });
    });
});

const squares = document.getElementsByClassName("grid_container")[0].querySelectorAll("div");
squares.forEach((div) =>{
    div.addEventListener("mouseenter", (e) => {
        div.style.backgroundColor = "black";
    });
});