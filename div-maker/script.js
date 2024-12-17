const divArea = document.getElementsByClassName("div-area")[0];

function newDiv() {
    const div = document.createElement("div");
    div.className = "div-default";
    divArea.appendChild(div);
}

function testP() {
    const newP = document.createElement("p");
    newP.className = "test-p";
    newP.textContent = "This is a test paragraph.";
    divArea.appendChild(newP);
}