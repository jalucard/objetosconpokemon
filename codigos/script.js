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
	nombrepoke.textContent= "Nombre: " + charizard.nombre;
	tipopoke.textContent= "Tipo: " + charizard.tipo;
	vidapoke.textContent= "Vida: " + charizard.vida;
	ataquepoke.textContent= "Ataque: " + charizard.ataque;
	defensapoke.textContent= "Defensa: " + charizard.defensa;
	debilidadpoke.textContent= "Debilidad: " + charizard.debilidad;
}

//Funcion para mostrar los datos del pokemon
function mostrarel()
{
	imagen.src= "images/electabuzz.png";
	nombrepoke.textContent= "Nombre: " + electabuzz.nombre;
	tipopoke.textContent= "Tipo: " + electabuzz.tipo;
	vidapoke.textContent= "Vida: " + electabuzz.vida;
	ataquepoke.textContent= "Ataque: " + electabuzz.ataque;
	defensapoke.textContent= "Defensa: " + electabuzz.defensa;
	debilidadpoke.textContent= "Debilidad: " + electabuzz.debilidad;
}

//Funcion para mostrar los datos del pokemon
function mostrargol()
{
	imagen.src= "images/golduck.png";
	nombrepoke.textContent= "Nombre: " + golduck.nombre;
	tipopoke.textContent= "Tipo: " + golduck.tipo;
	vidapoke.textContent= "Vida: " + golduck.vida;
	ataquepoke.textContent= "Ataque: " + golduck.ataque;
	defensapoke.textContent= "Defensa: " + golduck.defensa;
	debilidadpoke.textContent= "Debilidad: " + golduck.debilidad;
}

//Funcion para mostrar los datos del pokemon
function mostrarnid()
{
	imagen.src= "images/nidoking.png";
	nombrepoke.textContent= "Nombre: " + nidoking.nombre;
	tipopoke.textContent= "Tipo: " + nidoking.tipo;
	vidapoke.textContent= "Vida: " + nidoking.vida;
	ataquepoke.textContent= "Ataque: " + nidoking.ataque;
	defensapoke.textContent= "Defensa: " + nidoking.defensa;
	debilidadpoke.textContent= "Debilidad: " + nidoking.debilidad;
}

//Funcion para mostrar los datos del pokemon
function mostrarsc()
{
	imagen.src= "images/scyther.png";
	nombrepoke.textContent= "Nombre: " + scyther.nombre;
	tipopoke.textContent= "Tipo: " + scyther.tipo;
	vidapoke.textContent= "Vida: " + scyther.vida;
	ataquepoke.textContent= "Ataque: " + scyther.ataque;
	defensapoke.textContent= "Defensa: " + scyther.defensa;
	debilidadpoke.textContent= "Debilidad: " + scyther.debilidad;
}


/*Para tener en cuenta un Metodo es una funcion dentro de un objeto 
y un atributo es una variable dentro  de un objeto*/