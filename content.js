function myFunction() {
  var btn = document.createElement("BUTTON");   // Create a <button> element
  btn.innerHTML = "Copy";
  btn.setAttribute("id", "button-highlighter-copier");                // Insert text
  document.body.appendChild(btn);
  
  btn.addEventListener('click', function () {
    var nodes = document.getElementsByClassName("highlighted");
    var array = [];
    for (var i = 0; i < nodes.length; i++) {
      array.push(nodes[i].innerHTML);
    }
    var str = array.join("\r\r");
    str += "\r <" + document.URL + ">";
    var el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
  });
}

myFunction();