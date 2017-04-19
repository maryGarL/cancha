var body=document.getElementsByTagName("BODY")[0]
var contenedor=document.createElement("div");
var divGeneral=document.createElement("div");
var divLinea=document.createElement("div");
var divArco1=document.createElement("div");
var divArco2=document.createElement("div");
var divCirculoCentro=document.createElement("div");
var divPelota1=document.createElement("div");
var divPelota2=document.createElement("div");
var divPelota3=document.createElement("div");

contenedor.setAttribute("id","contenedor");
divGeneral.setAttribute("id","divGeneral");
divLinea.setAttribute("id","divLinea");
divArco1.setAttribute("id","divArco1");
divArco2.setAttribute("id","divArco2");
divCirculoCentro.setAttribute("id","divCirculoCentro");
divPelota1.setAttribute("id","divPelota1");
divPelota2.setAttribute("id","divPelota2");
divPelota3.setAttribute("id","divPelota3");
divArco1.setAttribute("class","arcos");
divArco2.setAttribute("class","arcos");
divPelota1.setAttribute("class","pelotaas");
divPelota2.setAttribute("class","pelotaas");
divPelota3.setAttribute("class","pelotaas");

divLinea.appendChild(divArco1);
divLinea.appendChild(divArco2);
divLinea.appendChild(divCirculoCentro);
divArco1.appendChild(divPelota1);
divArco2.appendChild(divPelota2);
divCirculoCentro.appendChild(divPelota3);
divGeneral.appendChild(divLinea);
contenedor.appendChild(divGeneral);
body.appendChild(contenedor);
