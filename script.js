let notesHTML = document.getElementById("notes-container");
let button = document.getElementById("addNote");
let titleInput = document.getElementById("title");
let noteInput = document.getElementById("note");

function createNote() {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");

    h2.innerHTML = titleInput.value;
    p.innerHTML = noteInput.value;

    div.className = "note";
    document.body.appendChild(div);
    div.appendChild(h2);
    div.appendChild(p);
}

button.addEventListener("click",createNote)