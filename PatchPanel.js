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

        let intersections = this.getIntersections();

        //sort intersections by closest to origin
        intersections.sort(function(a,b){
            let first = Math.abs(a.x)+Math.abs(a.y);
            let second = Math.abs(b.x)+Math.abs(b.y);
            return first-second;
        })

        //return distance to closest intersection
        if(intersections[0]){
            let distance = Math.abs(intersections[0].x) + Math.abs(intersections[0].y);
            return distance;
        }
        else{
            return false;
        }

    }

    findFewestStepsToAnIntersection() {

        let intersections = this.getIntersections();

        //sort intersections by fewest steps
        intersections.sort(function(a,b){
            return a.total_steps - b.total_steps;
        })

        //return number of steps for intersection with fewest steps
        if(intersections[0]){
            let steps = intersections[0].total_steps;
            return steps;
        }
        else{
            return false;
        }

    }

    getIntersections(){
        // note: only works for first 2 wires added

        //calculate all positions for each wire
        let wire_positions = [];
        for(let wire of this._wires) {            
            wire_positions.push( this.getAllPositions(wire) );
        }        

        //determine wire intersections (aka collisions)
        let collisions = [];
        let wire1_steps = 1;
        let wire2_steps = 1;
        for(let wp1 of wire_positions[0]) { 
            for(let wp2 of wire_positions[1]) { 
                if((wp1.x == wp2.x)&&(wp1.y == wp2.y)){
                    let collision = {};
                    collision.x = wp1.x;
                    collision.y = wp1.y;
                    collision.wire1_steps = wire1_steps;
                    collision.wire2_steps = wire2_steps;
                    collision.total_steps = wire1_steps + wire2_steps;
                    collisions.push(collision);
                }
                wire2_steps++;
            }
            wire2_steps = 1;
            wire1_steps++;
        }
        return collisions;

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