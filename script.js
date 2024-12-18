const divArea = document.getElementsByClassName("div-area")[0];

function newDiv() {
    const div = document.createElement("div");
    div.className = "div-default";
    divArea.appendChild(div);
}