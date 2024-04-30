let notesHTML = document.getElementById("notes-container");
let button = document.getElementById("addNote");
let titleInput = document.getElementById("title");
let noteInput = document.getElementById("note");

function deleteNote(evt) {
    evt.target.parentElement.remove()
}

function createNote() {
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let button = document.createElement("button");

    h2.innerHTML = titleInput.value;
    p.innerHTML = noteInput.value;
    button.innerHTML = "<b>delete</b>"

    button.addEventListener("click",deleteNote)

    div.className = "note";
    document.body.appendChild(div);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(button);
}

button.addEventListener("click",createNote)