var request = new XMLHttpRequest();
		request.open('GET', 'https://raw.githubusercontent.com/fernandavargasc/clase_8_evaluacion/gh-pages/pixar.json', true);
		request.onload = function () {
			var data = JSON.parse(this.response);
			var howMany = data.number;
				for(var x = 0; x < howMany; x++){
					console.log(data.peliculas[x].movie);
					document.getElementById("contact").innerHTML = data.peliculas[0].movie;
				}
			       

				

			}
		request.send();	

