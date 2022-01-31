function change (vocal){

			var vocalplus = [];

			if (vocal == "a"){

				return vocalplus = "ai";

			}

			if (vocal == "e"){

				return vocalplus = "enter";

			}

			if (vocal == "i"){

				return vocalplus = "imes";

						}

			if (vocal == "o"){

				return vocalplus = "ober";

						}

			if (vocal == "u"){

				return vocalplus = "ufat";

						}		

		}

		function concatenar (letra){

			 var stringEncrptada = [];

			 stringEncrptada = stringEncrptada + letra;
			 return stringEncrptada;


		}


		function encriptar(){
		var input = document.getElementById("texto_ingresado").value;
		var letra = [];
		var secreto = [];

		console.log(input);
		console.log(input.length);
		
	
		for (i=0;i<input.length;i++){
			letra = input[i];

			if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" ){

				letra = change(letra);
			}

			secreto = secreto + letra;


			letra = "";

			console.log(secreto);

		}

	
		document.getElementById("texto_resultante").value=secreto;

		console.log(secreto);

	copy_input = document.getElementById("texto_resultante").value;

	console.log(copy_input);
	}

	var button = document.getElementById("encriptador");
	button.onclick = encriptar;



	function cambio (str_vocales){

			console.log(str_vocales);


			var vocal = [];

			if (str_vocales == "ai"){

				 vocal = "a";
			}
			if (str_vocales == "enter"){

				 vocal = "e";
			}
			if (str_vocales == "imes"){

				 vocal = "i";
			}
			if (str_vocales == "ober"){

				 vocal = "o";
			}
			if (str_vocales == "ufat"){

				 vocal = "u";
			}

			console.log(vocal);
			return vocal;

		}


		function desencriptar(){
		var input = document.getElementById("texto_ingresado").value;
		var letra = [];
		var secreto = [];
		var str_vocales = [];


		console.log(input);
		console.log(input.length);
		//console.log(mensaje);
		
	
		for (i=0;i<input.length;i++){
			letra = input[i];
			console.log(i);

			if(letra == "a"){
				letra = "";

				for(j=0;j<2;j++){

					str_vocales[j] = input[i+j];
					console.log(str_vocales[j])
					

				}

				 mensaje = str_vocales.join("");
				console.log(mensaje);
				letra = cambio(mensaje);
				i=(i+j)-1;
				j=0;
			}

			if( letra == "e"){
				letra = "";

				for(j=0;j<5;j++){
					
					
					str_vocales[j] = input[i+j];
					
				}
				 mensaje = str_vocales.join("");
				console.log(mensaje);
				letra = cambio(mensaje);
				i=(i+j)-1;
				j=0;
			}

			if(letra == "i" || letra == "o" || letra == "u" ){
				letra = "";

				for(j=0;j<4;j++){
					
					
					str_vocales[j] = input[i+j];
					
				}
					 mensaje = str_vocales.join("");

					console.log(mensaje);
				
				letra = cambio(mensaje);
				
				i=(i+j)-1;
				j=0;

			}

			console.log(letra);
			secreto = secreto + letra;



			letra = "";
			str_vocales = [];


			console.log(secreto);


		}

		document.getElementById("texto_resultante").value=secreto;
		

	
	}


	var button2 = document.getElementById("desencriptador");
	button2.onclick = desencriptar;

	  var button3 = document.getElementById("btn-copy");


	  input = document.getElementById("texto_resultante");
	  
	  button3.addEventListener("click", function(event) {
	        event.preventDefault();
	        input.select();
	        document.execCommand("copy");
	    });