demo.state5 = function(){};
 demo.state5.prototype = {
	 preload: function(){},
	 create: function(){
		 game.stage.backgroundColor = '#FD5555';
		 console.log('state 5');
		 
		 addChangeStateEventListeners();
	 },
	 update: function(){}
 };