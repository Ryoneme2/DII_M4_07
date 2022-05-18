const ok = document.getElementById("ok");
const showDate = document.getElementById("showDate");
const light = document.getElementById("light");
const newText = "not Ok";

ok.addEventListener("click", () => {
  alert("index.html")
});

showDate.addEventListener("click", () => {
  alert(new Date());
});

light.addEventListener("click", () => {
  document.getElementsByClassName("container")[0].classList.toggle("active");
});