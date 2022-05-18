const ok = document.getElementById("ok");
const showDate = document.getElementById("showDate");
const light = document.getElementById("light");
const emptySpace = document.getElementById("emptySpace");
const newText = "not Ok";

ok.addEventListener("click", () => {
  alert("index.html")
});

showDate.addEventListener("click", () => {
  emptySpace.innerText = new Date();
});

showDate.addEventListener("dblclick", () => {
  emptySpace.innerText = ""
});


light.addEventListener("click", () => {
  document.getElementsByClassName("container")[0].classList.toggle("active");
});