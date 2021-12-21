let inp = document.querySelector("#input");
let btn = document.querySelector(".btn");
let ul = document.querySelector("ul");
let form = document.querySelector("form");

form.addEventListener("submit", add);

document.addEventListener("DOMContentLoaded", pickLocal);

ul.addEventListener("click", (e) => {
    let element = e.target;
    if (element.className == "btn btn-danger btn-sm") {
        element.parentElement.remove();
        let text = element.parentElement.textContent;
        let send = text.substr(0, text.length - 5);   //?
        localDelete(send);
    }

});





function localDelete(send) {
    let notes;
    if (localStorage.getItem("notes") == null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem("notes"));
    }

  let x = notes.indexOf(send); //index
 notes.splice(x,1);


 localStorage.setItem("notes", JSON.stringify(notes));

}

function localWrite(note) {
    let notes;
    if (localStorage.getItem("notes") == null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem("notes"));
    }

    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
};

function pickLocal() {
    let notes;
    if (localStorage.getItem('notes') == null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem("notes"));
    }
    notes.forEach(item => {
        addTodo(item)
    });
};

function addTodo(note) {
    let newli = document.createElement("li");
    newli.classList.add("list-group-item");
    newli.classList.add("d-flex");
    newli.classList.add("justify-content-between");
    newli.textContent = note;
    ul.appendChild(newli);

    let newbutton = document.createElement("button");
    newbutton.classList.add("btn");
    newbutton.classList.add("btn-danger");
    newbutton.classList.add("btn-sm");
    newbutton.textContent = "clear";
    newli.appendChild(newbutton);

};


function add(e) {

    if (inp.value == "") {
        alert("Todo can't be empty!")
    } else {
        addTodo(inp.value);
        localWrite(inp.value);
        inp.value = "";
        e.preventDefault();
    }

};


