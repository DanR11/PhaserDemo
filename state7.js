demo.state7 = function(){};
 demo.state7.prototype = {
	 preload: function(){},
	 create: function(){
		 game.stage.backgroundColor = '#FF00FF';
		 console.log('state 7');
		 
		 addChangeStateEventListeners();
	 },
	 update: function(){}
 };