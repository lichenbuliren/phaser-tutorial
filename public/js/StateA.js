var MyGame = {};

MyGame.StateA = function(game){

};

MyGame.StateA.prototype = {
    preload: function(){
        this.load.image('sky','/public/images/sky.png');
        this.load.image('ground','/public/images/platform.png');
        this.load.image('star','/public/images/star.png');
        game.load.spritesheet('dude', '/public/images/dude.png', 32, 48);
    },

    create: function(){
        this.state.start('StateB');
    }
}