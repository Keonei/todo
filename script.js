function addName() {
  event.preventDefault();

  var rad = document.getElementsByTagName("radio");
    document.getElementsByTagName("radio").checked = true;

  var li = document.createElement("li");
  var inputValue = document.getElementById("teamMember").value;
  var t = document.createTextNode(inputValue);

  li.appendChild(t);
  if (inputValue === '') {
    alert("You Cannot Journey Alone!");
  } else {
    document.getElementById("team-list").appendChild(li);
  }
  document.getElementById("teamMember").value = "";
}
