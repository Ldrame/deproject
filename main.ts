controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.over(true)
})
info.onCountdownEnd(function () {
    The_Explosion = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . 9 9 9 9 . 9 . . . . . . . 
        . . . . . 9 9 . 9 . 9 9 9 . . . 
        9 9 . . 9 . . . 9 . . . 9 9 . . 
        . 9 . 9 9 . . . 9 . . . . 9 . . 
        . 9 9 9 9 9 9 9 9 9 . . . 9 . . 
        . . . . . . . 9 9 . 9 . 9 9 . . 
        . . . . . . 9 9 . . 9 . 9 9 9 9 
        . . . 9 9 9 . . 9 9 . . . 9 9 . 
        . . 9 9 . . . 9 9 . . 9 9 9 9 . 
        . . . 9 . 9 9 9 . . 9 . 9 9 . . 
        9 9 9 . . 9 . . . . . . 9 . . . 
        . . 9 . . . . . . . . . 9 9 . . 
        . . 9 9 9 9 9 9 . . . 9 9 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    for (let index = 0; index < 4; index++) {
        music.footstep.loop()
        The_Explosion = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            5 5 5 5 2 2 2 2 2 2 2 2 2 . . . 
            2 2 2 2 5 5 5 5 2 2 2 2 2 . . . 
            2 2 2 2 5 5 2 5 2 2 2 2 2 . . . 
            2 2 2 2 5 2 5 5 2 2 2 2 2 . . . 
            2 2 2 2 5 5 5 5 2 2 2 2 2 . . . 
            2 2 2 2 2 2 2 2 5 5 5 5 5 . . . 
            . . . . . 2 5 2 . . . . . . . . 
            . . . . . 2 2 2 . . . . . . . . 
            . . . . . 2 f 2 . . . . . . . . 
            . . . . f f 5 f f . . . . . . . 
            . . . f f 5 5 5 f f . . . . . . 
            . . . f 5 5 5 5 5 f . . . . . . 
            . . . 5 5 5 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    game.over(false)
})
let The_Explosion: Sprite = null
The_Explosion = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    5 5 5 5 2 2 2 2 2 2 2 2 2 . . . 
    2 2 2 2 5 5 5 5 2 2 2 2 2 . . . 
    2 2 2 2 5 5 2 5 2 2 2 2 2 . . . 
    2 2 2 2 5 2 5 5 2 2 2 2 2 . . . 
    2 2 2 2 5 5 5 5 2 2 2 2 2 . . . 
    2 2 2 2 2 2 2 2 5 5 5 5 5 . . . 
    . . . . . 2 5 2 . . . . . . . . 
    . . . . . 2 2 2 . . . . . . . . 
    . . . . . 2 f 2 . . . . . . . . 
    . . . . f f 5 f f . . . . . . . 
    . . . f f 5 5 5 f f . . . . . . 
    . . . f 5 5 5 5 5 f . . . . . . 
    . . . 5 5 5 5 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(The_Explosion, 100, 100)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffddfffdddddfffffffffffffffffffffffffffffffffffffffddddddddffddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffddddffdddddddddffffffffffffffffffffffffffffffffffffdddddddddddffddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffddfffdfdddddddffffdffffffffffffffffffffffffffffffffddddddddddddddddfddddffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddfffffffffffffffff
    ffffffffffdddfdddddfffdddddffffffffffffffffffffffffffffdddddddddddddddddddddfddddffdffffffffffffffffffffffffffffffffffffffffffffffffffdfdddddddddfffffffffffffff
    ffffffdddddddfdffffddddddddffffffffffffffffffffffffffddddddddfffdddddfffdfddfddddddfdfffffffffffffffffffffddddffffffffffffffffffffddddfdddddddddddffffffffffffff
    fffffdddddfddffdddddfdddddddffffffffffffffffffffffffddddddddddddddddfddddfdddfddddddddffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddfffffffffffff
    ffffddddddddddddddddddddddddffffffffffffffffffffddfffdddddfddddffffdddddddddddfdddddddffffffffffffffffffffdddfddddfddddddddddddddddddddfddfdddddddddffffffffffff
    fffddddddddffddddfffffdfddfdffffffffffffffffffdddddffddddddddddddddddddddddddddfddddddfffffffffffffffffffffddddddddddddddffdddddddddddddddddffdddddddfffffffffff
    ffddddddfddddddddddfddddddfffffffffffdddffffffddddddffdddddddddddddffddddddddddfdfdddffffffffffffffffffffffdddddddddddddddddddddddddddfddddfddddddddddffffffffff
    ffddddddddddddfdddddddfffffffffffffffddddddddfdddddddffdddddddddddfddfffffffffddddddddffffffffffffffffffffffddddddddddddddddddddddfddddfdddddddfdddddddfffffffff
    fffdddddddddddddffffffffffffffffffffffffddddddfddddddffffffdddddddddddddddddddddddddddfffffffffffffffffffffffdddddddddddddddfddddddddddfddddddddfddddddfffffffff
    fffddddddfffffffffffffffffffffffffdddddddddddddfddddffffffffffddddddddddddddddddddddddfffffffffffffffffffffffffddddddffffddddffffddddddfddddddddddddddddffffffff
    fffffffffffffffffffffffffffffffffddddddddddddddfffffdddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddfddfddfdddddfffffff
    fffffffffffffffffffffffffffffffffdfddddfdddddddddfdddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddfdddddddddddddffffddfddddddddffffff
    ffffffffffffffffffffffffffffffffffffddddfdddddddddfdddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddffdffdddddffddddddfdddddddddddffffff
    ffffffffffffffffffffffffffffffffffffdddddfdddddddddfdddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddfddfdddddfdddddfddddfffffff
    fffffffffffffffffffffffffffffffffffffddddfdddfdddddfdddddffffffffffffffffffffffffffffffffffffffffffffdddddddffffffffdddddddddddddddddddffdfddddfddddfdddfdffffff
    fffffffffffffffffffffffffffffffffffffdddddddddfdddddddddddffffffffffffffffffffffffffffffffffffffffffddddddddddffffffffffdddddddddddddddddffffdddffdddfddddffffff
    ffffffffffffffffffffffffffffffffffffffddddfddddddfddddddddfffffffffffffffffffffffffffffffffffffffffddddddddddddffffffffffffdddddddddddddddddffddddfddfddddffffff
    ffffffffffffffffffffffffffffffffffffffddddfdddddfddddddddddfffffffffffffffffffffffffffffffffffffffdddddddddddddfffffffffffffddddddddddddddddddddddddddddddffffff
    fffffffffffffffffffffffffffffffffffffffdddddddffdddddddddfdfffffffffffffffffffffffffffffddfffffffddddddfdddddddfdfffffffffffffddddddddddddddddddddddddddffffffff
    fffffffffffffffffffffffffffffffffffffffdddddddddddddfdddfdddffffffffffffffffffffffffffdddddddffffdddddddfddddddfddffffffffffffffffffffdddddddddddfffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffdddddddddddfddddfdddffffffffffffffffffffffdddddddddddddffddddddddfdddddfddffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffddddddddddfddddfddddffffffffffffffffffdddddddddddddddddddddddddddfddddfdddfffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffddfffffffffdfdddfffffffffffffffdddddddddddddddddddddffffffffdfddddfdddfffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffddddddddddddddfddddffffffffffffffdddddddddddddddffffffdfffddddddfdddfdddfffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffddddddfdffdddddfdddffffffffffffffddddddddfffdfffdddddffddddddddddfdddddddffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffdddddfdddffddddfddffffffffffffffdddddfffdddddddddddddddddddddddddfddddddffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffdddddfddddffdddfdffffffffffffffddddddddddddddddfddddddddddddddddfddddddffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffdddddddfdddffddfffffffffffffffddddddddddddddddfffddddddddddddfddddddddffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdfffffddddddffdffffffffffffffddddddddfddddffddddddddddddddddfddddddddffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddfffffffffffffffdddddddddddddddfddddddddddddddfddddddddfffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffdddddfffffffffffffffffffffffddddddddddddffffffffffffffffdddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffdddddddddfffffffffffffffffffffffdddddddddddffffffffffffffffdddddddddddddddddddddddddfffdfdddddddddffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffdddddddddddddffffffffffffffffffffffdddddddddffffffffffffffffffffffffffffffffddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffddddddddddddddddffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffffffffdddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffdddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffdddddddfdfdddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddffffffffffffffffffffffffffffffffffffffddffffff
    ffffffffffffffddddddddfdffddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddfffffffffffffffffffffffffffffffffffffffffffdddddffffff
    fffffffffffffdddddddddfdddffdddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddfffff
    fffffffffffffddddddddddfddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddfffff
    fffffffffffffddddddddddfddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddfffff
    fffffffffffffddddddddfdfdddfddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddffff
    fffffffffffffdddddddfddddddfddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddfddddddddddddffff
    fffffffffffffddddddfddddddddfdddddddfffffffffffffffffffffffffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffffffffffffffffddddddddffdfddddddddffff
    fffffffffffffdddddfddddddddddfdddddddffffffffffffffffffffffffffffffffffffffffffffddddffddddddddffffffffffffffffffffffffffffffffffffffffffdddddddddfdddfdddddffff
    fffffffffffffdddddddddddddfddfdddddddfffffffffffffffffffffffffffffffffffffffffffdddddddfdddddddddddffffffffffffffffffffffffffffffffffffffdddddddddfdddfdddddffff
    fffffffffffffddddfdddddddddddfdddddddfffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffdddddddddddddddddddffff
    fffffffffffffddddfdddddddddddfdddddddffffffffffffffffffffffddffffddddddddddddddddddddddddfddddddddddddddfffffffffffffffffffffffffffffffffdfdddddddddddddddddffff
    fffffffffffffdddddddddddddddddfddddddfffffffffffffffffffffddddddddddddddddddddddddddddddfdddddddddddddddddfffffffffffffffffffffffffffffffdddddddddddddddddddffff
    fffffffffffffdddddddddffddddddfddddddfffffffffffffffffffddddddfdddfffffdddddddddddddddddfdddddddddddddddddddfffffffffffffffffffffffffffffdddddddddddddddddddffff
    fffffffffffffddddddddfdddddddddfdddddffffffffffffffffffffdddddfddddddddfffdddddddddddddddfddddddddddddddddddddfffffffffffffff3fffffffffffdddddddfdddddddddddffff
    fffffffffffffddddddddddddddddddddddddffffffffffffffffffffdfffdfddddddddddddddddddddddddffddddddddddddddddddddddddffffffffffffffffffffffffdddddddfdddddddddddffff
    fffffffffffffddddddddddddddddddddddddfffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffddddfddfddddfddddddffff
    fffffffffffffddddddddddddddddddddddddfffffffffffffffffffffffffffffffdddddddddddddddfddddddddfdddddddddddddddddddddddfffffffffffffffffffffddddfddfddddfdddddfffff
    ffffffffffffffddddddddddddddddddddddfffffffffffffffffffffffffffffffffffddddddddddfdddddddddddddddddddfddfddfffdddddddffffffffffffffffffffdddddddfdddfddddddfffff
    ffffffffffffffddddddddfffffdddddddddfffffffffffffffffffffffffffffffffffffddddddddfdfdddddddddddddddfdddddffdddddddddddfffffffffffffffffffdddddddfddddddddddfffff
    ffffffffffffffddddddddddddddddddfdddffffffffffffffffffffffffffffffffffffdddfddddddddffdddddddddddddddddddddddddddddddddffffffffffffffffffdddddddddddddddddffffff
    fffffffffffffffdddddddddddddddddfddffffffffffffffffffffffffffffffffffffffdddfdddddddddffdddddddddddddddddddddddddddddddffffffffffffffffffddddfddddddddddddffffff
    fffffffffffffffdddddddddfddddddddfdffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffddddfddddddddddddffffff
    ffffffffffffffffddddddffddddddddddffffffffffffffffffffffffffffffffffffffffffddddddddfdddddfddddddddddddddddddddddddddddffffffffffffffffffdddddddfdddfdfdddffffff
    ffffffffffffffffdddfddddddddddddddfffffffffffffffffffffffffffffffffffffffffffddddddddfddddfdddddfddddddddddddddddddddddffffffffffffffffffddddddfddddddfddfffffff
    ffffffffffffffffdddfdddddddddddddfffffffffffffffffffffffffffffffffffffffffffffddddddddfddddfddddfddddffdddddddddddddfdfffffffffffffffffffddddddfddddddfddfffffff
    fffffffffffffffffddfdddddddddddddffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddfddddddddddddddddddddffffffffffffffffffffdddddddddddddfddfffffff
    ffffffffffffffffffddfdddddddffffdfffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddfdddddddddddddddddddffffffffffffffffffffdddddddddddddfdffffffff
    ffffffffffffffffffddfdddddddfddfffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddfdddddfffffffffffffffffffffffffffffffffffddddddddddddfdffffffff
    fffffffffffffffffffddfdddffdddfffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddfdddddddffffffffffffffffffffffddddddddddddfdffffffff
    ffffffffffffffffffffdddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddfffffffffffffffffffffffdddddfddddddffffffffff
    ffffffffffffffffffffddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddfffffffffffffffffffffffffddddddddddddffffffffff
    fffffffffffffffffffffdddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddfdddddfffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddfdfffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddfdddfffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddffffffffffff
    ffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddffffffffffff
    fffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddfffffffffffff
    fffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffddddddddddddddfffddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffddddddddddddfdddddffffffdddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffddddddddddddfdddddddddddfffffdddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddffddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffdddddddddddddfddddddddddddddddddffddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddffdddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddfddddfddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffdddddddfdddddddddddddfdddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddffddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffdddddddddddddddddddffddddddddddddffddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffddffffffffffffffffffffffffffffffddddfddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffddddfffffffffffffffffffffffffffffffdddddddddddddddddddddddddddfddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffddddddffffffffffffffffffffffffffffffffdddddddffffdddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffdddddddffffffffffffffffffffffffffffffffffddddddddfffddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffddddddddfdddddddffffffffffffffffffffffffffffdddddddddddddfdddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffdddddddddddddddddddfffffffffffffffffffffffffffffddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffddddddddddddddddddddffffffffffffffffffffffffffffffddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffdddddddddddddfdddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffdddfffdddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddfffffffffffffffffffffffffffffffffffffff
    fffffffffffdddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddfffffffffffffffffffffffffffffffffffff
    fffffffffffdddfffddddddddddfddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddfffffffffffffffffffffffffffffffffff
    ffffffffffffdddddfffdddddddfffddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddfffffffffffffffffffffffffffffffff
    fffffffffffffddddffdffdddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddffffffffffffffffffffffffffffffff
    fffffffffffffffddddfffddddddfdfddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddffddddddfffffffffffffffffffffffffffffff
    fffffffffffffffdddddddffddffddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddfddddddddddddffdddddffffffffffffffffffffffffffffff
    fffffffffffffffffffffffddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddfddddffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffdddddddffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddfddddddffffffffffffddfddddffffdddddffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddfdddddddddddddddddddddddddfddddddddddddfffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddffffddddddddddddffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddffffddddddddddddddffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.onUpdate(function () {
    controller.moveSprite(The_Explosion, 100, 100)
    The_Explosion.startEffect(effects.trail)
})
