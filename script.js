let noteContainer = document.querySelector(".notes-container");
let button = document.querySelector(".addNote");

let titleInput = document.getElementById("title");
let noteInput = document.getElementById("note");
let searchButton = document.getElementById("searchButton");
let searchBar = document.getElementById("searchBar")


let notes = []

function deleteNote(evt) {
    evt.target.parentElement.parentElement.remove()
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
    noteContainer.appendChild(div);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(button);

    notes.push({title:titleInput.value,note:noteInput.value});
}

function search() {
    let notesHTML = Array.from(noteContainer.children)

    for (let i = 0; i < notes.length; i++) {
        if (notes[i].note.includes(searchBar.value) || notes[i].title.includes(searchBar.value)) {
            notesHTML[i].style.display = "block";
        } else {
            notesHTML[i].style.display = "none";
        }
    }

    if (searchBar.value == "") {
        for (let i = 0; i < notes.length; i++) {
             notesHTML[i].style.display = "block";
        }
    }
}

searchButton.addEventListener("click",search)
button.addEventListener("click",createNote)