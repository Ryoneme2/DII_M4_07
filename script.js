const ok = document.getElementById("ok");
const newText = "not Ok";

ok.addEventListener("click", () => {
  if(ok.innerHTML === "Ok") {
    ok.innerHTML = newText;
  } else {
    ok.innerHTML = "Ok";
  }
});
