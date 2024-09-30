const body = document.body;
const btn = document.querySelector(".title");
const btn1 = document.querySelector(".judul");
const btn2 = document.querySelector(".judul2");
const btn3 = document.querySelector(".judul3");
const btn4 = document.querySelector(".footer");

const skillSelect = document.querySelector("#skill");

const submitButton = document.querySelector("#btn");

submitButton.addEventListener("click", gantiWarna);

function gantiWarna(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const skillPilihan = document.getElementById("skill").value;
  const selectedSkill = skillSelect.value;
  console.log(name);
  console.log("Fungsi gantiWarna dipanggil!");

  console.log("Skill yang dipilih:", selectedSkill);
  skillKamu.textContent = `hello ${name} skill kamu ${skillPilihan}`;

  console.log(footer);
  if (selectedSkill === "CSS") {
    btn.style.backgroundColor = "pink";
    btn1.style.color = "pink";
    btn2.style.color = "pink";
    btn3.style.color = "pink";
    btn4.style.backgroundColor = "pink";
  } else if (selectedSkill === "JavaScript") {
    btn.style.backgroundColor = "yellow";
    btn1.style.color = "yellow";
    btn2.style.color = "yellow";
    btn3.style.color = "yellow";
    btn4.style.backgroundColor = "yellow";
    btn4.style.Color = "black";
  } else {
    btn.style.backgroundColor = "red";
    btn1.style.color = "red";
    btn2.style.color = "red";
    btn3.style.color = "red";
    btn4.style.backgroundColor = "red";
  }
}
