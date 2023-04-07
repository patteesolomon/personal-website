var title = document.getElementById("name");
var words = `Bryan perez`;
let i = 0;
for(;i < title.innertext.length ; i++)
{
  title.textContent;
}
var speed = 100;
function typeWriter() {
    if (i < words.length) {
      title.textContent += words.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

typeWriter();
console.log("Hello World");
