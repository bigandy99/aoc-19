class PatchPanel {

    constructor() {
        this._wires = [];
    }

    addWire(data) {
        // a wire is stored as an arry of steps
        let steps = [];
        for (let i = 0; i < data.length; i++) {
            steps[i] = {};
            steps[i].direction = data[i].substring(0, 1);
            steps[i].amount = Number(data[i].substring(1));
        }
        this._wires.push(steps);
    }

    findDistanceToClosestIntersection() {
        // note: only works for first 2 wires added

        //calculate all positions for each wire
        let wire_positions = [];
        for(let wire of this._wires) {            
            wire_positions.push( this.getAllPositions(wire) );
        }        

        //determine any common wire positions
        let collisions = [];
        for(let wp1 of wire_positions[0]) { 
            for(let wp2 of wire_positions[1]) { 
                if((wp1.x == wp2.x)&&(wp1.y == wp2.y)){
                    let collision = {};
                    collision.x = wp1.x;
                    collision.y = wp1.y;
                    collisions.push(collision);
                }   
            }
        }

        //sort any common positions by closest to origin
        collisions.sort(function(a,b){
            let first = Math.abs(a.x)+Math.abs(a.y);
            let second = Math.abs(b.x)+Math.abs(b.y);
            return first-second;
        })

        //return distance to first common position (if one exists)
        if(collisions[0]){
            let distance = Math.abs(collisions[0].x) + Math.abs(collisions[0].y);
            return distance;
        }
        else{
            return false;
        }

    }

    getAllPositions(wire){

        // note: since all wires start at 0,0 we will not store that position
        let positions = [];
        let current_position = {
            x : 0,
            y : 0
        };
        for (let i = 0; i < wire.length; i++) {
            for (let j = 0; j < wire[i].amount; j++) {
                switch (wire[i].direction) {
                    case "R":
                        current_position.x += 1;
                        break;
                    case "L":
                        current_position.x -= 1;
                        break;
                    case "U":
                        current_position.y += 1;
                        break;
                    case "D":
                        current_position.y -= 1;
                        break;
                }
                let position = {};
                position.x = current_position.x;
                position.y = current_position.y;
                positions.push( position );
            }
        }
        return positions;
    }


}

module.exports = PatchPanel