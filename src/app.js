/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";
//import { WatchIgnorePlugin } from "webpack";

window.onload = function() {
  //write your code here
  const quien = ["El coche", "La moto", "El telefono", "Los niños", "El jefe"];

  const acciones = [
    "se rompio",
    "pincho la rueda",
    "quedo sin batería",
    "me dio trabajo a última hora",
    "me duele un pie"
  ];
  const donde = [
    "en la calle",
    "en la autopista",
    "en el area de servicio",
    "cuando salía para casa",
    "a última hora"
  ];

  let excusa =
    quien[Math.floor(Math.random() * quien.length)] +
    " " +
    acciones[Math.floor(Math.random() * acciones.length)] +
    " " +
    donde[Math.floor(Math.random() * donde.length)];
  document.getElementById("excusa").innerHTML = excusa;

  //console.log("Hello Rigo from the console!");
};
