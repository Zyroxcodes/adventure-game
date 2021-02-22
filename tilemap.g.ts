// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "grass stage":
            case "level1":return tiles.createTilemap(hex`1000100001010101020d0d0d0d0d0d0d0d0d0d0c010101010e0a110a0a0a0a0a0a0a0a0b010101010e0a0a0a0a0a0a0a0a0a110b010101010e0a0a0a0a0a0a0a0a0a0a0b030303030e0a0a0a0a0a0a0a0a0a0a0b030404030e0a0a0a0a0a0a0a0a0a0a0b040303040e0a0a0a0a0a0a0a0a0a0a0b030304030e0a0a0a0a0a0a0a0a0a0a0b030303040e0a0a0a0a0a0a0a0a0a0a0b040303030e0a0a0a0a0a0a0a0a0a0a0b040303030e0a110a0a0a0a0a0a0a0a0b040303030f101010101010101010100905070707060706060707070707070708050707070607070607070707070807070507070506060706070707070807070705070505070707060707070707070807`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles0,sprites.castle.tilePath9,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile2":return tile2;
            case "myTile3":
            case "tile3":return tile3;
            case "coin2":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
