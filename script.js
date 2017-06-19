function addName() {
  console.log("Epic Adventure Time!");
  event.preventDefault();

  var rad = document.getElementsByName('class');
  var taskClassObj = [];

    for(var i = 0; i < rad.length; i++) {
      rad[i].onclick = function() {
        taskClassObj.push = ({"class":this.value});
      };
    };

    for (var i = 0; i < taskClassObj.length; i++) {
      if (i == 0)
        document.getElementById("team-list").appendChild(li);
      };

  var li = document.createElement("li");
  var name = document.getElementById("teamMember").value;
  var t = document.createTextNode(name);

  li.appendChild(t);
  if (name === '') {
    alert("You Cannot Journey Alone!");
  } else {
    document.getElementById("team-list").appendChild(li);
  }
  document.getElementById("teamMember").value = "";
}


// var difficulty = [
//   "easy",
//   "normal",
//   "challenging",
//   "hard",
//   "stop",
//   "nope"
// ];
//
// var taskClass = [
//   "paladin",
//   "cleric",
//   "fighter",
//   "ranger",
//   "rogue",
//   "wizard"
// ];
//
// var taskMember = [];
