var game = new Phaser.Game(400, 600, Phaser.AUTO);
game.state.add('state1', demo.state1);
game.state.start('state1');
