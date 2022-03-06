function start_call() {
  var pname = document.getElementById("name");
  var pcall = document.getElementById("call");

  pname.innerText = "자바스크립트";
  pcall.innerText = "010-1234-5678";
}

function calling() {
  var ing = document.getElementById("doing");
  ing.style.display = "block";

  setTimeout(start_call, 2000);
}
