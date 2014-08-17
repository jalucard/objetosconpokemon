/**********
	CREADO POR JAIRO RAMIREZ
	EJERCICIO NUM 2 PROGRAMACION  BASICA
	                         *********/
//Variables necesarias para crear  los objetos
var charizard;
var electabuzz;
var golduck;
var nidoking;
var scyther;


//Funcion para crear el objeto Pokemon
function Pokemon(nombrep,tipop,vidap,ataquep,defensap,debilidadp)
{
	this.nombre= nombrep;
	this.vida= vidap;
	this.tipo= tipop;
	this.ataque= ataquep;
	this.defensa= defensap;
	this.debilidad= debilidadp;
}

//Funcion inicio para crear las instancias del objeto pokemon
function inicio()
{
	charizard= new Pokemon("Charizard", "Fuego/Volador", 360, 267, 255,"Agua/roca");
	electabuzz= new Pokemon("Electabuzz", "Electrico", 334, 265, 213, "Tierra");
	golduck= new Pokemon("Golduck", "Agua", 364, 263, 255, "Electrico/planta");
	nidoking= new Pokemon("Nidoking", "Veneno/Tierra", 366, 303, 253, "Agua/psiquico");
	scyther= new Pokemon("Scyther", "Insecto/Volador", 344, 319,259, "Fuego/roca");
}

//Funcion para mostrar los datos del pokemon
function mostrarchar()
{
	imagen.src= "images/charizard.png";
	nombrepoke.innerText= "Nombre: " + charizard.nombre;
	tipopoke.innerText= "Tipo: " + charizard.tipo;
	vidapoke.innerText= "Vida: " + charizard.vida;
	ataquepoke.innerText= "Ataque: " + charizard.ataque;
	defensapoke.innerText= "Defensa: " + charizard.defensa;
	debilidadpoke.innerText= "Debilidad: " + charizard.debilidad;
}

//Funcion para mostrar los datos del pokemon
function mostrarel()
{
	imagen.src= "images/electabuzz.png";
	nombrepoke.innerText= "Nombre: " + electabuzz.nombre;
	tipopoke.innerText= "Tipo: " + electabuzz.tipo;
	vidapoke.innerText= "Vida: " + electabuzz.vida;
	ataquepoke.innerText= "Ataque: " + electabuzz.ataque;
	defensapoke.innerText= "Defensa: " + electabuzz.defensa;
	debilidadpoke.innerText= "Debilidad: " + electabuzz.debilidad;
}

//Funcion para mostrar los datos del pokemon
function mostrargol()
{
	imagen.src= "images/golduck.png";
	nombrepoke.innerText= "Nombre: " + golduck.nombre;
	tipopoke.innerText= "Tipo: " + golduck.tipo;
	vidapoke.innerText= "Vida: " + golduck.vida;
	ataquepoke.innerText= "Ataque: " + golduck.ataque;
	defensapoke.innerText= "Defensa: " + golduck.defensa;
	debilidadpoke.innerText= "Debilidad: " + golduck.debilidad;
}

//Funcion para mostrar los datos del pokemon
function mostrarnid()
{
	imagen.src= "images/nidoking.png";
	nombrepoke.innerText= "Nombre: " + nidoking.nombre;
	tipopoke.innerText= "Tipo: " + nidoking.tipo;
	vidapoke.innerText= "Vida: " + nidoking.vida;
	ataquepoke.innerText= "Ataque: " + nidoking.ataque;
	defensapoke.innerText= "Defensa: " + nidoking.defensa;
	debilidadpoke.innerText= "Debilidad: " + nidoking.debilidad;
}

//Funcion para mostrar los datos del pokemon
function mostrarsc()
{
	imagen.src= "images/scyther.png";
	nombrepoke.innerText= "Nombre: " + scyther.nombre;
	tipopoke.innerText= "Tipo: " + scyther.tipo;
	vidapoke.innerText= "Vida: " + scyther.vida;
	ataquepoke.innerText= "Ataque: " + scyther.ataque;
	defensapoke.innerText= "Defensa: " + scyther.defensa;
	debilidadpoke.innerText= "Debilidad: " + scyther.debilidad;
}


/*Para tener en cuenta un Metodo es una funcion dentro de un objeto 
y un atributo es una variable dentro  de un objeto*/