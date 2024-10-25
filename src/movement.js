loadSprite("player", "../www/sprites/bean.png");

const SPEED = 320

const player = add([
    sprite('player'),
    pos(center()),
]);

onKeyDown('left', ()=> {
    player.move(-SPEED, 0)
});

onKeyDown('right', ()=> {
    player.move(SPEED, 0)
});

add([
    text("Press arrow keys", { width: width() / 2,
    }),
    pos(12, 12),
]);