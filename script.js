/* Your code here */
var mylist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < mylist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createText("Delete");
  span.className = "Delete";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}


var Delete = document.getElementsByClassName("Delete");
var i;
for (i = 0; i < Delete.length; i++) {
  Delete[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle ('Done');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Task can not be empty");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "Delete";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < Delete.length; i++) {
    Delete[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

