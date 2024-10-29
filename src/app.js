/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const numeros = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const simbolos = ["♦", "♥", "♣", "♠"];

  function generarCarta() {
    const numeroAleatorio = Math.floor(Math.random() * numeros.length);
    const simboloAleatorio = Math.floor(Math.random() * simbolos.length);

    const numero = numeros[numeroAleatorio];
    const simbolo = simbolos[simboloAleatorio];

    document.getElementById("numero").textContent = numero;
    document.getElementById("simboloArriba").textContent = simbolo;
    document.getElementById("simboloAbajo").textContent = simbolo;

    if (simbolo === "♦" || simbolo === "♥") {
      document.getElementById("simboloArriba").classList.add("rojo");
      document.getElementById("simboloAbajo").classList.add("rojo");
      document.getElementById("numero").classList.add("rojo");
    }
  }

  generarCarta();
};
