import kaboom from "kaboom"

const k = kaboom()

k.loadSprite("player", "sprites/player.png")

const SPEED = 320

const player = add([
    sprite('player'),
    pos(center()),
	area(),
	body(),
]);

onKeyDown('space', () => {
	player.jump()
	player.play('jump')
});

onKeyDown('left', ()=> {
	player.move(-SPEED, 0)
	player.play('run')
});

onKeyDown('right', ()=> {
	player.move(SPEED, 0)
	player.play('run')
});

add([
    text("Press arrow keys", { width: width() / 2,
    }),
    pos(12, 12),
]);