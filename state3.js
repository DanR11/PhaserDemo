demo.state3 = function(){};
 demo.state3.prototype = {
	 preload: function(){},
	 create: function(){
		 game.stage.backgroundColor = '#FF2A7F';
		 console.log('state 3');
		 
		 addChangeStateEventListeners();
	 },
	 update: function(){}
 };