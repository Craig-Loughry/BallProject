import {Ball} from './Ball';
import {BallService} from './ball.service'

export class BallComponent {
    ballSvc:BallService;
    
    constructor(bSvc: BallService) {
        this.ballSvc = new BallService();
        console.log("BallTest initialized");
    }
}
let ballComp: BallComponent = new BallComponent
(new BallService());

let b1: Ball =  new Ball ("red", "small");
ballComp.ballSvc.add(b1);
let b2: Ball =  new Ball ("blue", "large");
ballComp.ballSvc.add(b2);
let b3: Ball =  new Ball ("green", "medium");
ballComp.ballSvc.add(b3);

for(let ball of ballComp.ballSvc.list()) {
    console.log(ball.about());
}
console.log("remove an item...");
ballComp.ballSvc.remove(b2.id);

for(let ball of ballComp.ballSvc.list()) {
    console.log(ball.about());
}
