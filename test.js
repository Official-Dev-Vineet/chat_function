const msg = ["hello", "how are you"];
// console.table(msg)
const duplicate = "hello";
const data = ["hello", "hello", duplicate];

let real = new Set(data);
const color = () => {
  var color = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
  return color;
};
document.body.style.backgroundColor='#020202'
let bg=document.querySelector('.bg')
let span=document.querySelectorAll('.bg span')
const layer=document.querySelector('.layer')
setInterval(() => {
  span.forEach((element,index)=>{
    element.style.background=color();
    // element.style.opacity=Math.random()
    element.style.borderRadius=Math.floor(Math.random() * 0xff).toString(16)+'%'
    element.style.rotate=Math.random() * 6 + 'deg';
    element.style.filter=`drop-shadow(0 0 20px ${color()})`
  })
}, 1000);
