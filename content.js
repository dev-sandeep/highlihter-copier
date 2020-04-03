function myFunction() {
  var btn = document.createElement("BUTTON");   // Create a <button> element
  btn.innerHTML = "Copy";                   // Insert text
  document.body.appendChild(btn);
  btn.style.position = 'fixed';
  btn.style.bottom = '10px';
  btn.style.right = '10px';
  btn.style.zoom = '0.8';

  btn.addEventListener('click', function () {
    var nodes = document.getElementsByClassName("highlighted");
    var array = [];
    for (var i = 0; i < nodes.length; i++) {
      array.push(nodes[i].innerHTML);
    }
    var str = array.join("\r\r");
    console.log("STR: ", str);

    var el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
  });
}

myFunction();

// position: fixed;
// right: 10px;
// bottom: 10px;