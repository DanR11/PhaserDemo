demo.state8 = function(){};
 demo.state8.prototype = {
	 preload: function(){},
	 create: function(){
		 game.stage.backgroundColor = '#532A1C';
		 console.log('state 8');
		 
		 addChangeStateEventListeners();
	 },
	 update: function(){}
 };