demo.state4 = function(){};
 demo.state4.prototype = {
	 preload: function(){},
	 create: function(){
		 game.stage.backgroundColor = '#55FF55';
		 console.log('state 4');
		 
		 addChangeStateEventListeners();
	 },
	 update: function(){}
 };