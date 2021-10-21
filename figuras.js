//Código del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}
perimetroCuadrado();

function areaCuadrado(lado) {
  return lado * lado;
}
areaCuadrado();

//Código del triángulo.

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
perimetroTriangulo();

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
areaTriangulo();

//Código del circulo
const PI = Math.PI;

//Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}
diametroCirculo();

//PI

//Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
perimetroCirculo();

//Área
function areaCirculo(radio) {
  return radio * PI;
}
areaCirculo();
