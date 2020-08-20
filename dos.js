/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let acumuladorPeso = 0;
  let precioLiquidoCaro;
  let marcaLiquidoCaro;
  let flagLiquido = 0;
  let pesoSolidoBarato;
  let marcaSolidoBarato;
  let flagSolido = 0;


  do{
    marca = prompt("Ingrese marca: ");
		while (marca == "" || !isNaN(marca)){
			marca= parseFloat(prompt("Marca incorrecta. Ingrese marca: "));
    }

    precio = parseFloat(prompt("Ingrese precio: "));
		while ( isNaN(precio) || precio < 0){
			precio = parseFloat(prompt("Error. Ingrese precio: "));
    }
    
    peso = parseFloat(prompt("Ingrese peso: "));
		while ( isNaN(peso) || peso < 0){
			peso = parseFloat(prompt("Error. Ingrese peso: "));
    }

    tipo = prompt("Ingrese tipo (solido o liquido): ");
		while (tipo != "solido" && tipo != "liquido"){
      tipo = prompt("Tipo invalido. Ingrese tipo: ");
    }
    
    acumuladorPeso += peso;


    if(tipo == "liquido"){
      if(flagLiquido == 0 || precio > precioLiquidoCaro){
        precioLiquidoCaro = precio;
        marcaLiquidoCaro = marca;
        flagLiquido = 1;
      }
    }
    else{
      if(flagSolido == 0 || peso < marcaSolidoBarato){
        pesoSolidoBarato = peso;
        marcaSolidoBarato = marca;
        flagSolido = 1;
      }
    }

    seguir = prompt("Quiere ingresar otro producto?: ");

  } while(seguir == 'si');

  console.log("A- Peso total compra " + acumuladorPeso + " kg");

  if(flagLiquido == 0){
    console.log("B- No se han ingresado liquidos");
  }
  else{
    console.log("B- Liquido caro. Marca: " + marcaLiquidoCaro + ". Precio $" + precioLiquidoCaro);
  }
  if(flagSolido == 0){
    console.log("C- No se han regristrado solidos");
  }
  else{
    console.log("C- Solido barato. Marca: " + marcaSolidoBarato + ". Peso: " + pesoSolidoBarato + "kg");
  }
}



  


