demo.state9 = function(){};
 demo.state9.prototype = {
	 preload: function(){},
	 create: function(){
		 game.stage.backgroundColor = '#B19301';
		 console.log('state 9');
		 
		 addChangeStateEventListeners();
	 },
	 update: function(){}
 };