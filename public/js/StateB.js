MyGame.StateB = function(game){
    this.platforms;
    this.player;
    this.cursors;
};

MyGame.StateB.prototype = {
    create: function(){
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        //        按键监听
        this.cursors = game.input.keyboard.createCursorKeys();
        this.sky = this.add.sprite(0,0,'sky');


        this.platforms = this.add.group();
        this.platforms.enableBody = true;

        var ground = this.platforms.create(0,this.world.height-64,'ground');
        ground.scale.setTo(2,2);

        ground.body.immovable = true;

        var ledge = this.platforms.create(400,400,'ground');
        ledge.body.immovable = true;
        ledge = this.platforms.create(-150,250,'ground');
        ledge.body.immovable = true;

        this.player = this.add.sprite(32,this.world.height - 150,'dude');
        this.game.physics.arcade.enable(this.player);
        this.player.body.bounce.y = 0.2;
        this.player.body.gravity.y = 300;
        this.player.body.collideWorldBounds = true;

//        动画,参数true表示循环,每秒10帧的动画速度
        this.player.animations.add('left', [0, 1, 2, 3], 10, true);
        this.player.animations.add('right', [5, 6, 7, 8], 10, true);
    },

    update: function(){
          // 碰撞检测
        game.physics.arcade.collide(this.player, this.platforms);
//        重置X轴 加速度
        this.player.body.velocity.x = 0;

        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -150;
            this.player.animations.play('left');
        } else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = 150;
            this.player.animations.play('right');
        } else {
//            停止
            this.player.animations.stop();
            this.player.frame = 4;
        }

//        判断是否会按下向上的键,并且this.player站在地面上
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.body.velocity.y = -350;
        }
    }
};