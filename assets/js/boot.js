var GAME = {

	State: {},

	PREFABS: {}

};

GAME.State.boot = function(game){


};


GAME.State.boot.prototype = {
	preload: function(){
		this.load.image('bar', 'assets/img/gui/bar.png');


	},

	create: function(){
		this.game.state.start('preloader');



	}





};


GAME.State.preloader = function(game){
	//this.ready = false;

};

GAME.State.preloader.prototype = {

	preload: function(){

		this.game.stage.backgroundColor = '#505050';




	},

	create: function(){




	},

	update: function(){


	}
};
