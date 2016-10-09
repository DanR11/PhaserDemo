demo.state6 = function(){};
 demo.state6.prototype = {
	 preload: function(){},
	 create: function(){
		 game.stage.backgroundColor = '#7FFFAA';
		 console.log('state 6');
		 
		 addChangeStateEventListeners();
	 },
	 update: function(){}
 };