$(document).ready(function(){

	//jogo
	var points = 0;

	//cenario
	var scenerySize = 500,
		sceneryH = scenerySize,
	    sceneryW = scenerySize,
	    sceneryWColor = "#f4f4f4",
	    sceneryDiv = $("#scenery");

	//personagem
	var characterSize = 25,
		characterH = characterSize,
		characterW = characterSize,
		characterColor = "#CCCCCC",
		characterPosX = 0,
		characterPosY = (sceneryH-characterH),
		characterMove = characterW,
		currentPosition = { 
							left : characterPosX, 
							top : characterPosY 
						},
		characterId = "character",
		speedMovie = 100;

	//loops
	var loopCharacter;

	//frutas
	var fruitsSize = characterH / 5,
		fruitsColor = "#999999",
		fruitPlusSize = characterH / 2.5,
		fruitPlusColor = "#000000",
		fruitsPosition = Array();

	//obstaculos
	var obstaclesColor = "#ebebeb",
		obstacles = { 
			position : 
				{
					0 : [ 25,25 ], 1 : [ 25,50 ], 2 : [ 25,75 ], 3 : [ 50,25 ],
					4 : [ 100,25 ], 5 : [ 125, 25 ], 6 : [ 150,25 ], 7 : [ 175,25 ],
					8 : [ 200,25 ], 9 : [ 250, 25 ], 10 : [ 275,25 ], 11: [ 275,50 ],
					12 : [ 325, 0 ],
					13 : [ 325, 50], 14 : [ 350, 50], 15 : [ 375, 50], 16 : [ 375, 25],
					17 : [ 425, 0 ], 18 : [ 425, 25 ], 19 : [ 425, 50 ],
					20 : [ 450, 25],
					21 : [ 75, 75 ], 22 : [ 100,75 ], 23: [ 125, 75 ], 24 : [ 150,75],
					25 : [ 200, 75 ], 26 : [ 200,100 ], 27: [ 200, 125 ], 28 : [ 200,150 ], 29 : [225, 75],
					30 : [ 25, 125 ], 31 : [ 50, 125 ], 32 : [ 75, 125 ], 33 : [ 100, 125 ], 34 : [ 125, 125 ], 35 : [ 150, 125 ],
					36 : [ 250, 125], 37 : [ 275, 125 ], 38 : [ 275, 100 ], 39 : [ 300, 125 ],
					40 : [ 350, 100 ], 41 : [ 350, 125 ], 42 : [ 350, 150 ], 43 : [ 375, 100 ],
					44 : [ 425, 100], 45 : [ 450, 100], 46 : [ 475, 100],
					45 : [ 25, 175], 46 : [ 25, 200 ], 47 : [ 25, 225 ], 48 : [ 50, 175 ], 49 : [ 75, 175 ],
					50 : [ 75, 225 ], 51 : [ 125, 175 ], 52 : [ 150, 175 ], 53 : [ 150, 200 ], 54 : [ 150, 225 ], 55 : [ 125, 225 ],
					56 : [ 0, 275 ], 57 : [ 25, 275 ], 58 : [ 50, 275 ], 59 : [ 75, 275 ], 60 : [ 100, 275 ],
					61 : [ 150, 275 ], 62 : [ 175, 275 ], 63 : [ 200, 275 ], 64 : [ 200, 250 ], 65 : [ 200, 225 ],
					66 : [ 250, 175 ], 67 : [ 250, 200 ], 68 : [ 250, 225 ], 69 : [ 250, 250 ], 70 : [ 275, 175 ], 71 : [ 300, 175 ],
					72 : [ 400, 175 ], 73 : [ 425, 175 ], 74 : [ 425, 150 ], 74 : [ 425, 150 ],
					75 : [ 475, 225], 76 : [ 450, 225], 77 : [ 425, 225], 78 : [ 400, 225],
					90 : [ 350, 225], 91 : [ 325, 225], 92 : [ 325, 225], 93 : [ 300, 225], 94 : [ 300, 250], 95 : [ 300, 275], 
					96 : [ 350, 275], 97 : [ 375, 275], 98 : [ 400, 275], 99 : [ 425, 275], 100 : [ 475, 275],
					101 : [ 25, 325], 102 : [ 50, 325], 103 : [ 75, 325], 104 : [ 100, 325], 105 : [ 125, 325], 106 : [ 25, 350], 106 : [ 25, 350], 107 : [ 25, 375],
					108 : [ 175, 325], 109 : [ 175, 350], 110 : [ 175, 375], 111 : [ 175, 400],
					112 : [ 225, 325], 113 : [ 250, 325], 114 : [ 250, 325], 115 : [ 275, 325], 116 : [ 300, 325], 117 : [ 250, 300],
					118 : [ 350, 325], 119 : [ 375, 325], 120 : [ 400, 325], 121 : [ 425, 325], 122 : [ 450, 325],
					123 : [ 450, 375], 124 : [ 450, 400], 125 : [ 450, 425], 126 : [ 425, 375], 127 : [ 400, 375], 128 : [ 375, 375],
					129 : [ 325, 375], 130 : [ 300, 375], 131 : [ 275, 375], 132 : [ 250, 375], 133 : [ 250, 400], 134 : [ 250, 425], 135 : [ 250, 450], 136 : [ 225, 400],
					137 : [ 350, 425 ], 138 : [ 375, 425 ], 139 : [ 400, 425 ], 140 : [ 400, 450 ], 141 : [ 400, 450 ],
					142 : [ 475, 475 ],
					143 : [ 300, 425 ], 144 : [ 300, 450 ], 145 : [ 300, 475 ], 146 : [ 325, 475 ],
					147 : [ 0, 425 ], 148 : [ 25, 425 ], 149 : [ 50, 425 ], 150 : [ 50, 450 ],
					151 : [ 150, 450 ], 152 : [ 150, 475 ], 153 : [ 175, 450 ], 154 : [ 200, 450 ],
					155 : [ 75, 375 ], 156 : [ 100, 375 ], 157 : [ 100, 400 ], 158 : [ 100, 425 ],  159 : [ 100, 450 ],  160 : [ 100, 475 ]
				} 
		};

	//função principal do jogo
	void function initGame(){

		//iniciando cenario
		var scenery = function(){
			
			sceneryDiv.height(sceneryH)
					  .width(sceneryW)
					  .css({
					  	'background-color': sceneryWColor
					  });

		}();


		//iniciando personagem
		var character = function(){

			$('<div>',{
				id : characterId,
				width: characterW,
				height: characterH,
				css : {
			        'background-color' : characterColor,
			        'position' : 'absolute',
			        'z-index' : '1',
			        'left' : characterPosX,
			        'top' : characterPosY
			    },
			    click : function(event) {
			        console.log(event);
			    },
			    appendTo : sceneryDiv
			});

		}();

		//iniciando obstaculos
		var obstaclesInit = function(){

			for( var pos in obstacles.position ) {

				$('<div>',{
					class : "obstacles",
					width: characterW,
					height: characterH,
					css : {
				        'background-color' : obstaclesColor,
				        'position' : 'absolute',
				        'left' : obstacles.position[pos][0],
				        'top' : obstacles.position[pos][1]
				    },
				    appendTo : sceneryDiv
				});
				
			}

		}();


		//colisoes
		//colisao obsctaculo
		var colisionObstacles = function(posX, posY){

			colision = 0;
			
			for( var i in obstacles.position ) {

				if( 

					obstacles.position[i][0] == posX &&
					obstacles.position[i][1] == posY

				){
					colision = 1;
				}

			}

			return colision;

		} 


		//iniciando as frutas
		var fruits = function(){

			countFruits = 0;
			for (var i=0; i<=((sceneryW/characterSize)-1); i++) {
					
				for (var j=0; j<=((sceneryH/characterSize)-1); j++) {
					
					if(colisionObstacles(i*characterSize, j*characterSize)==0){

						if(countFruits%30==0){

							fSize = fruitPlusSize;
							fColor = fruitPlusColor;

						}else{

							fSize = fruitsSize;
							fColor = fruitsColor;

						}

						$('<div>',{
							class : "fruits",
							width: fSize,
							height: fSize,
							id: "W"+(i*characterSize)+'H'+(j*characterSize),
							css : {
						        'background-color' : fColor,
						        'position' : 'absolute',
						        'left' : (i*characterSize)+((characterSize/2)-(fSize/2)),
						        'top' : (j*characterSize)+((characterSize/2)-(fSize/2)),
						    },
						    appendTo : sceneryDiv
						});

						countFruits++;
						fruitsPosition.push(  [(i*characterSize),(j*characterSize)] );

					}

				}	
			}

		}();


		//colisao frutas
		var colisionFruits = function(posX, posY){
			
			for( var i in fruitsPosition ) {

				if( 

					fruitsPosition[i][0] == posX &&
					fruitsPosition[i][1] == posY

				){
					item = $("#W"+fruitsPosition[i][0]+"H"+fruitsPosition[i][1]);
					item.remove();
					if(item.length){
						points++;
					}
				}

			}

			return points;

		} 


		//movimentação personagel
		$(document).keydown(function(event){
			/*
				37 = left
				38 = up
				39 = down
				40 = right
			*/

			//numero de pontos total do jogo
			endPoints = fruitsPosition.length;
			console.log(endPoints);

			clearInterval(loopCharacter);
			loopCharacter = setInterval(function(){ 

				switch(event.which){
					case 37: 
						calc = currentPosition.left - characterMove;
						if(calc>=0 && colisionObstacles(calc, currentPosition.top)==0 ){
							if(colisionFruits(calc, currentPosition.top)==endPoints){
								break;
								alert("Fim de jogo");
							}
							currentPosition.left = calc;
							direction = {
								left : currentPosition.left
							}
						}else{
							clearInterval(loopCharacter);
						}
					break;
					case 38: 
						calc = currentPosition.top - characterMove;
						if(calc>=0 && colisionObstacles(currentPosition.left, calc)==0 ){
							if(colisionFruits(currentPosition.left, calc)==endPoints){
								break;
								alert("Fim de jogo");
							}
							currentPosition.top = calc; 
							direction = {
								top : currentPosition.top
							}
						}else{
							clearInterval(loopCharacter);
						}
					break;
					case 39: 
						calc = currentPosition.left + characterMove; 
						if(calc<=(sceneryW-characterW) && colisionObstacles(calc, currentPosition.top)==0){
							if(colisionFruits(calc, currentPosition.top)==endPoints){
								break;
								alert("Fim de jogo");
							}
							currentPosition.left = calc;
							direction = {
								left : currentPosition.left
							}
						}else{
							clearInterval(loopCharacter);
						}
					break;
					case 40: 
						calc = currentPosition.top + characterMove; 
						if(calc<=(sceneryH-characterH) && colisionObstacles(currentPosition.left, calc)==0 ){
							if(colisionFruits(currentPosition.left, calc)==endPoints){
								break;
								alert("Fim de jogo");
							}
							currentPosition.top = calc;
							direction = {
								top : currentPosition.top
							}
						}else{
							clearInterval(loopCharacter);
						}
					break;


				}
				
				$("#"+characterId).css(direction);

			}, speedMovie);

			

		});


	}(event);

});