/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad; 
	let promedio;
	let contadorFem = 0;
	let contadorMascu = 0;
	let acumuladorEdad = 0;
	let PesoMaxMascu;
	let NombreMayorPesoMascu;
	
	
	for(let i=0; i < 5; i++){

		nombre = prompt("Ingrese nombre: ");
		while (nombre == "" || !isNaN(nombre)){
			nombre = parseFloat(prompt("Nombre incorrecto. Ingrese nombre: "))
		}

		peso = parseFloat(prompt("Ingrese peso: "));
		while ( isNaN(peso) || peso < 0){
			peso = parseFloat(prompt("Error. Ingrese peso: "));
		}
		sexo = prompt("Ingrese sexo: ");
		while (sexo != "femenino" && sexo != "masculino"){
			sexo = prompt("Sexo invalido. Ingrese sexo: ")
		}

		edad = prompt("Ingrese edad: ");
		while (isNaN(edad) || edad <= 0 || edad > 120){
			edad = parseInt(prompt("Edad incorrecta. Ingrese edad: "))
		}

		if (sexo == 'masculino'){
			if(contadorMascu == 0 || peso > PesoMaxMascu){
				PesoMaxMascu= peso;
				NombreMayorPesoMascu = nombre;
			}
			contadorMascu++;
		}
		else{
			contadorFem++;
		}

		acumuladorEdad += edad; 

	}	

	promedio = acumuladorEdad / 5;

	console.log("A- Cantidad de mujeres " + contadorFem);

	console.log("B- Promedio de edad: " + promedio + " años");

	console.log("C- Hombre con mayor peso " + PesoMaxMascu + " kg. Se llama " + NombreMayorPesoMascu);





	
}
