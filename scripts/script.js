let lastSelectedDay = null;

const addNote = (btn) => {

  let card = btn.closest(".card");
  lastSelectedDay = card;
  bubbleUpEditor();
}

const submitNote = () => {
  let noteContent = document.querySelector("#note-content").value;

  let span = document.createElement('span');
  span.innerHTML = "Deadline";
  span.className = "badge badge-pill badge-warning";

  let li = document.createElement('li');
  li.innerHTML = noteContent;
  li.className = "list-group-item";

  let card = lastSelectedDay;
  let list = card.querySelector(".list-group");

  list.insertBefore(li, list.firstElementChild);
  list.insertBefore(span, list.firstElementChild);

  bubbleDownEditor();
}

const bubbleUpEditor = () => {
  let editor = document.querySelector(".note-editor");
  let offset = document.querySelector("#days-container").offsetHeight +
               document.querySelector("#arrow-container").offsetHeight;
               
  editor.style.top = "-" + offset + "px";
}

const bubbleDownEditor = () => {
  let editor = document.querySelector(".note-editor");
  editor.style.top = "100vh";
}

const init = () => {
  let addNoteButtons = document.querySelectorAll(".add-note");
  addNoteButtons.forEach(btn => {
    btn.addEventListener("click", () => addNote(btn));
  })

  document.querySelector(".submit-note").addEventListener("click", submitNote);
}


document.addEventListener("DOMContentLoaded", init);
