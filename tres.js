/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo;
	let lugar;
	let temporada;
	let cantidad;
	let lugarFavorito;
	let contadorBariloche = 0;
	let contadorCataratas = 0;
	let contadorSalta = 0;
	let sexoMaxPasajeros;
	let maxPasajeros;
	let contadorInvierno = 0; 
	let acumuladorInvierno = 0; 
	let promedio = 0;
	let flag = 0;
	let seguir;

	do{
		sexo = prompt("Ingrese sexo: ");
		while (sexo != "femenino" && sexo != "masculino"){
			sexo = prompt("Sexo invalido. Ingrese sexo: ")
		}

		lugar = prompt("Ingrese lugar (Bariloche, Cataratas o Salta): ");
		while (lugar != "bariloche" && lugar != "cataratas" && lugar != "salta"){
			lugar = prompt("Lugar invalido. Ingrese lugar: ");
		}

		temporada = prompt("Ingrese temporada (otoño, invierno, primavera o verano): ");
		while (temporada != "otoño" && temporada != "invierno" && temporada != "primavera" && temporada != "verano"){
			temporada = prompt("Temporada invalida. Ingrese temporada: ");
		}

		cantidad = parseInt(prompt("Ingrese cantidad: "));
		while (isNaN(cantidad) || cantidad <= 0){
	        cantidad = parseInt(prompt("Cantidad invalidad. Ingrese cantidad: "));
		}

		if( lugar == "bariloche"){
			contadorBariloche++;
		}
		else if( lugar == "cataratas"){
			contadorCataratas++;
		}
		else{
			contadorSalta++;
		}

		if(flag == 0 || cantidad > maxPasajeros){
			maxPasajeros = cantidad;
			sexoMaxPasajeros = sexo;
			flag = 1;
		}

		if(temporada == "invierno"){
			contadorInvierno++;
			acumuladorInvierno += cantidad;
		}

		seguir = prompt("Quiere ingresar otro viaje?");



	} while (seguir == 'si');

	if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
		lugarFavorito = "Bariloche";
	}
	else if (contadorCataratas > contadorBariloche && contadorCataratas > contadorSalta){
		lugarFavorito = "Cataratas";
	}
	else{
		lugarFavorito = "Salta";
	}

	if (contadorInvierno != 0){
		promedio = acumuladorInvierno / contadorInvierno;
	}

	console.log("A- El lugar mas elegido: " + lugarFavorito);

	console.log("B- El sexo del titular que lleva mas pasajeros: " + sexoMaxPasajeros + " con " + maxPasajeros + " pasajeros.");

	console.log("C- El promedio de personas que viajan en invierno es " + promedio);


}
