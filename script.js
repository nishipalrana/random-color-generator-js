let colors = "0123456789ABCDEF";
const body = document.querySelector("body");
const colorDisplay = document.querySelector("#color");
const tooltip = document.querySelector(".info");

const getColor = () => {
  let colorName = "#";
  for (let i = 0; i < 6; i++) {
    colorName += colors.charAt(Math.floor(Math.random() * colors.length));
  }
  body.style.backgroundColor = colorName;
  colorDisplay.innerHTML = colorName;
};

const copytext = () => {
  colorDisplay.innerHTML === "..."
    ? ""
    : navigator.clipboard.writeText(colorDisplay.innerHTML);
  tooltip.style.visibility = "visible";
  setTimeout(() => {
    tooltip.style.visibility = "hidden";
  }, 1500);
};
