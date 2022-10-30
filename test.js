const msg = ["hello", "how are you"];
// console.table(msg)
const duplicate = "hello";
const data = ["hello", "hello", duplicate];

let real = new Set(data);
const color = () => {
  var color = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
  return color;
};
document.body.style.backgroundColor = "#000";

let bg = document.querySelector(".bg");
for (let i = 1; i < 100; i++) {
  const particles = document.createElement("span");
  bg.appendChild(particles);
}
let span = document.querySelectorAll(".bg span");
const layer = document.querySelector(".layer");
setInterval(() => {
  span.forEach((element, index) => {
    element.style.background = color();
    element.style.borderRadius = Math.floor(Math.random() * 0xff).toString(16) + "%";
    element.style.scale=Math.random()
  });
}, 1000);
