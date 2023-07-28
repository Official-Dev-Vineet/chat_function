const color = () => {
  var color = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
  return color;
};
let bg = document.querySelector(".bg");
for (let i = 1; i < window.innerWidth; i++, i += 100) {
  for (let j = 1; j < window.innerHeight; j++, j += 100) {
    let span = document.createElement("span");
    span.style.background = color();
    span.style.borderRadius =
      Math.floor(Math.random() * 0xff).toString(16) + "%";
    span.style.scale = Math.random();
    bg.appendChild(span);
  }
}
let span = document.querySelectorAll(".bg span");
setInterval(() => {
  span.forEach((element, index) => {
    element.style.background = color();
    element.style.borderRadius =
      Math.floor(Math.random() * 0xff).toString(16) + "%";
    element.style.scale = Math.random();
  });
}, 3000);
