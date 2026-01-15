document.getElementById('careerForm').addEventListener('submit', function(e){
e.preventDefault();
const interest = document.getElementById('interest').value;
let result = "";

if(interest === "programacao"){
result = "Área recomendada: Desenvolvimento Web\nTecnologias: HTML, CSS, JavaScript, React";
}
if(interest === "dados"){
result = "Área recomendada: Ciência de Dados\nTecnologias: Python, SQL, Pandas";
}
if(interest === "design"){
result = "Área recomendada: UX/UI Design\nFerramentas: Figma, Design Thinking";
}
if(interest === "infra"){
result = "Área recomendada: DevOps\nTecnologias: Linux, Docker, Cloud";
}

document.getElementById('result').innerText = result;
});