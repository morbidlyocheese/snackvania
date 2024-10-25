map = [
    '                      ',
    '                      ',
    '                      ',
    '                      ',
    '                      ',
    '======================',
];

const levelCfg = {
    width: 64,
    width: 64,

    '=': ()=> [
        sprite('ground'),
        'block',
        area(),
        solid()
    ]
};

const game_level = addLevel(map, levelCfg)